const User = require('./models/user');

module.exports = addUser = async (req, res) => {
  try {
    const { user_name, email, date_of_birth } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        error: true,
        message: 'User details already exists',
      });
    }
    const user = await User.create({
      user_name,
      email,
      date_of_birth,
    });
    res.status(201).json({ message: 'User details added', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
