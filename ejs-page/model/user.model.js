const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  company:{
    type:String,
    required:true
  },
  model:{
    type:String,
    required : true
  },
  milage:{
    type:String,
    required:true
  }
})

const user = mongoose.model( 'User', userSchema );
module.exports=user;