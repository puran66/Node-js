const express = require('express');
const { listController } = require('../controllers/inndex');
const route = express.Router();

route.get('/Home',listController.getHome);

route.post('/addToDo',listController.addTodo)

route.get('/update/:id',listController.redirectToUpdate)

route.post('/update',listController.updateTodo)

route.get('/delete/:id',listController.removeTodo)

module.exports = route;