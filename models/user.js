const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user_name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  date_of_birth: { type: Date, required: true },
  created_at: { type: Date, default: new Date() },
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
