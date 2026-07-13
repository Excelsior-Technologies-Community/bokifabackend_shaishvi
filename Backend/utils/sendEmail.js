const nodemailer = require("nodemailer");

const sendEmail = async ({ email, subject, message }) => {
    // Create Ethereal test account
    const testAccount = await nodemailer.createTestAccount();

    // Create transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    // Send email
    const info = await transporter.sendMail({
        from: '"Book Store" <bookstore@test.com>',
        to: email,
        subject,
        text: message,
    });

    console.log("Message Sent:", info.messageId);

    console.log(
        "Preview URL:",
        nodemailer.getTestMessageUrl(info)
    );
};

module.exports = sendEmail;