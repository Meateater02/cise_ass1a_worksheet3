const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');

const dotenv = require("dotenv");
dotenv.config();

const username = process.env.username;
const password = process.env.password;

const db = "mongodb+srv://" + username + ":"+ password+ "@cluster0.psbqaha.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;