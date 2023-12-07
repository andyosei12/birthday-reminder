const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
const addUser = require('./user.controller');
const validateUserInput = require('./middleware/validateUserInput');

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

db.connect();

// handling routes here
app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/', validateUserInput, addUser);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
