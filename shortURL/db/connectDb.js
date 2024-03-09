const mongoose = require('mongoose');

const connectDB = () => {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/Urls').then(() => {
      console.log("DB connected successfully...");
    })
  }
  catch (err) {
    console.log(err, "db error");
  }
}

module.exports = connectDB;