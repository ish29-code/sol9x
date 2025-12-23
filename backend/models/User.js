import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["admin", "student"], default: "student" },

    isVerified: { type: Boolean, default: false },
    verificationToken: String,

    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

export default mongoose.model("User", userSchema);

