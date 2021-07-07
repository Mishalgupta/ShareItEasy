const nodemailer = require('nodemailer');

const sendMail = async ({ from, to, subject, text, html }) => {
    let transporter = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }

    });

    // for sending mail

    let info = await transporter.sendMail({
        // from: from,
        // to: to,
        // subject: subject,
        // text: text,
        // html: html
        from: `inshare <${from}>`,
        to,
        subject,
        text,
        html
    })
}


module.exports = router;