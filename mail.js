const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = async ({ email, name }) => {
  try {
    const info = await transporter.sendMail({
      from: '"Drew Inc" <nanaosei2089@gmail.com>', // sender address
      to: email, // receiver address
      subject: 'We celebrate you on your birthday', // Subject line
      // plain text body
      html: `
      <h3>Hi ${name}, wishing you a happy birthday<h3/>
      <p>From the management of Drew Inc. we hope you have a special day. Lunch is on us today.</p>
      <p>Cheers 🥂🥳🎉</p>
      `, // html body
    });

    console.log('Message sent: %s', info.messageId);
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendMail;
