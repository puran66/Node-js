const express = require('express');
const { userController } = require('../controllers');
const { userAuthMiddlewares } = require('../middlewares');
const route = express();



route.get('/signUp', userController.signUp);
route.post('/signUp', userController.createUser);

route.get('/login', userController.login);
route.post('/login', userController.userLogin)

route.post('/create-url', userController.createUrl)

// route.get('/:shortid',userController.handleredirectUrl)

route.get('/:shortId', userController.redirectUrl)

route.get('/',userController.homePage)


module.exports = route;