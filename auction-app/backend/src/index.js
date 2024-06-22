// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://user:password@localhost:3306/database_name');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

sequelize.authenticate().then(() => {
    console.log('Connected to MySQL');
  }).catch(err => {
    console.error('Failed to connect to MySQL', err);
  });