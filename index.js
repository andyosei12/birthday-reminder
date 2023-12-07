const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const schedule = require('node-schedule');

const db = require('./db');
const addUser = require('./user.controller');
const validateUserInput = require('./middleware/validateUserInput');
const birthdayReminder = require('./birthdayReminder');

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

db.connect();

// schedule.scheduleJob('* * * * *', birthdayReminder);
schedule.scheduleJob('* * * * *', birthdayReminder);

// handling routes here
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/v1/user', validateUserInput, addUser);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
