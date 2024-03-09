const mongoose = require('mongoose');

const dbConnect =()=>{
    mongoose.connect(process.env.DBBASEURL).then(()=>{
      console.log("DB Connected");
    }).catch((err)=>{
      console.log(err,"db not connected");
    })
}


module.exports = dbConnect;