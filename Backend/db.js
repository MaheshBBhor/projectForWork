// db.js
const mongoose = require('mongoose');

// Replace 'YOUR_CONNECTION_STRING' with your actual MongoDB connection string
const connectionString = 'mongodb+srv://maheshbhor97:<password>@cluster0.2qkp3nn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: 'admin', // If applicable, specify the authentication source
  user: 'maheshbhor97', // Replace with your MongoDB username
  pass: 'Mahi@7149', // Replace with your MongoDB password
//   loggerLevel: 'info', // Set the log level to 'info' or 'debug'
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

module.exports = db;
