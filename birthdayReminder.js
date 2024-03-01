const User = require('./models/user');
const sendMail = require('./mail');

const birthdayReminder = async () => {
  // get current date
  const currentDate = new Date();
  // find all users whose birthday is today
  try {
    // find a user whose date of birth is equal to the current month and current day
    const users = await User.aggregate([
      {
        $match: {
          $expr: {
            $and: {
              $eq: [{ $month: '$date_of_birth' }, currentDate.getMonth()],
              $eq: [{ $dayOfMonth: '$date_of_birth' }, currentDate.getDate()],
            },
          },
        },
      },
    ]);
    if (users.length > 0) {
      users.forEach((user) => {
        console.log(`Today is ${user.user_name}'s birthday!`);
        sendMail({ email: user.email, name: user.user_name });
      });
    } else {
      console.log('No birthdays today');
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = birthdayReminder;
