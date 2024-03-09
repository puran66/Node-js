require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./db/connectDb');
const { userRoutes } = require('./routes');


// body parser //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// view  engine setup //

app.set('view engine', 'ejs')

// Db connect //

connectDB();

//routes //

app.use('/', userRoutes)

// server create //

http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started success...");
})