import nodemailer from "nodemailer";

console.log("📧 Mailtrap config loaded");

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 25,
    secure: false,
    auth: {
        user: "1db6cf95f96c5b",
        pass: "739c81965e9ba7",
    },
});

export default transporter;
