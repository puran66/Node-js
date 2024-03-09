const mongoose = require('mongoose');

const connectDb = () => {

  mongoose.connect('mongodb://127.0.0.1:27017/toDoList').then(()=>{
    console.log("DB Connected Success");
  }).catch((err)=>{
    console.log(err,"from db connect");
  })
}

module.exports = connectDb;