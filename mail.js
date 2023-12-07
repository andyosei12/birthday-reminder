const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = async () => {
  try {
    const info = await transporter.sendMail({
      from: '"Nana Kwesi" <nanaosei2089@gmail.com>', // sender address
      to: 'andrew.oseiowusu@gmail.com', // list of receivers
      subject: 'We celebrate you on your birthday', // Subject line
      text: 'Wishing you a happy birthday', // plain text body
      html: '<b>Wishing you a happy birthday</b>', // html body
    });

    console.log('Message sent: %s', info.messageId);
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendMail;