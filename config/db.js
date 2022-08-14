const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');

const dotenv = require("dotenv");
dotenv.config();

const username = process.env.NAME;
const password = process.env.PASSWORD;

//mongodb+srv://<username>:<password>@cluster0.psbqaha.mongodb.net/?retryWrites=true&w=majority
const db = "mongodb+srv://" + username + ":"+ password+ "@cluster0.psbqaha.mongodb.net/?retryWrites=true&w=majority";

// const db = process.env.MONGO_URL;

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