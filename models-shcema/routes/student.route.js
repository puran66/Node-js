const express = require('express');
const { studentController } = require('../controllers');
const route = express.Router()

route.post('/add',studentController.addStudent)

module.exports = route;