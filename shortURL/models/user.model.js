const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
  orignalUrl: {
    type: String,
    required: true
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true
    ref:'Url'
  }
},
  { timestamps: true }
)

const Url = mongoose.model('Url', userSchema)

module.exports = Url;