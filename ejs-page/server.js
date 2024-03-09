require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const dbConnect = require('./db/dbConnect');
const { userRoutes } = require('./routes');

// body parser //

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set ejs engine //

app.set('view engine', 'ejs')

// DB Connection //

dbConnect();

// Routes //

app.use('/v1', userRoutes)

// create server //

http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started success");
})
