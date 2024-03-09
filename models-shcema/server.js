require('dotenv').config()
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser');
const connectDb = require('./db/dbConnect');
const routes = require('./routes');
const app = express();

// body parser //

app.use(bodyParser.urlencoded({extended:"false"}))
app.use(bodyParser.json())

//Db Connect //

connectDb('mongodb://127.0.0.1:27017/studentData')

// routes //

app.use('/v1',routes)


// server  port //

http.createServer(app).listen(process.env.PORT,()=>{
    console.log("server started success at 3002 port..");
})

