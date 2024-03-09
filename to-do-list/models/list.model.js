const mongoose = require('mongoose')

const listSchema  = new mongoose.Schema({
  toDo:{
    type:String,
    required:true,
  },
  time:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  }
})

const list = mongoose.model('list', listSchema);

module.exports = list;