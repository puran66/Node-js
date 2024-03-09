const express = require('express');
const { userController } = require('../controllers/inndex');
const route = express.Router();

route.get('/loginPage',userController.loginPage);
route.post('/login',userController.login);


module.exports = route;