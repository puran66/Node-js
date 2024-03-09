const mongoose = require('mongoose')

const userLoginSchema  = new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required: true
  }
})

const user = mongoose.model('user', userLoginSchema);

module.exports = user;