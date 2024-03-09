const mongoose = require('mongoose');

const userCreateSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required: true
  }
})

const userSignUp = mongoose.model('userCreate', userCreateSchema);

module.exports = userSignUp;