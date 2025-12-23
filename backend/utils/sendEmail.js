import transporter from "../config/mail.js";

const sendEmail = async (to, subject, text) => {
    await transporter.sendMail({
        from: '"MERN App" <no-reply@mern.com>',
        to,
        subject,
        text,
    });
};

export default sendEmail;
