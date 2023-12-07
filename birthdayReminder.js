const User = require('./models/user');
const sendMail = require('./mail');

const birthdayReminder = async () => {
  // get current date
  const currentDate = new Date();
  // find all users whose birthday is today
  try {
    const users = await User.find({
      date_of_birth: {
        $eq: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        ),
      },
    });
    if (users.length > 0) {
      users.forEach((user) => {
        console.log(`Today is ${user.user_name}'s birthday!`);
        sendMail();
      });
    } else {
      console.log('No birthdays today');
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = birthdayReminder;
