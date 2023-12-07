const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

db.connect();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
