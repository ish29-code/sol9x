import bcrypt from "bcryptjs";
import crypto from "crypto";
import User from "../models/User.js";
import Student from "../models/Student.js";
import generateToken from "../utils/generateToken.js";
import sendEmail from "../utils/sendEmail.js";

// ====================== SIGNUP ======================
export const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // 1️⃣ Validation
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // 2️⃣ Check existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // 3️⃣ Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4️⃣ Generate verification token
        const verificationToken = crypto.randomBytes(32).toString("hex");

        // 5️⃣ Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            verificationToken,
        });

        // 6️⃣ Create student profile if role is student
        if (role === "student") {
            await Student.create({
                user: user._id,
                name: name || "",
                email,
            });
        }

        // 7️⃣ Send verification email (SAFE)
        try {
            await sendEmail(
                email,
                "Verify Email",
                `${process.env.CLIENT_URL}/verify/${verificationToken}`
            );
        } catch (emailError) {
            console.error("Email error:", emailError.message);
        }

        return res.status(201).json({
            message: "Signup successful. Please verify your email.",
        });

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

export const verifyEmail = async (req, res) => {
    try {
        const user = await User.findOne({
            verificationToken: req.params.token,
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        user.isVerified = true;
        user.verificationToken = null;
        await user.save();

        res.json({ message: "Email verified successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        if (!user.isVerified) {
            return res.status(401).json({ message: "Please verify your email" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.json({
            token: generateToken(user._id, user.role),
            role: user.role,
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const forgotPassword = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.json({ message: "Reset link sent if email exists" });
        }

        const token = crypto.randomBytes(32).toString("hex");
        user.resetPasswordToken = token;
        user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
        await user.save();

        await sendEmail(
            user.email,
            "Reset Password",
            `${process.env.CLIENT_URL}/reset/${token}`
        );

        res.json({ message: "Reset link sent" });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const resetPassword = async (req, res) => {
    try {
        const user = await User.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpire: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        user.password = await bcrypt.hash(req.body.password, 10);
        user.resetPasswordToken = null;
        user.resetPasswordExpire = null;
        await user.save();

        res.json({ message: "Password reset successful" });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const changePassword = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        user.password = await bcrypt.hash(req.body.newPassword, 10);
        await user.save();

        res.json({ message: "Password changed successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
