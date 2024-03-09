const express = require('express');
const { userController } = require('../controller');
const  router = express.Router();

router.get('/home',userController.getHome);

router.post('/add',userController.addData)

router.get('/delete/:id',userController.deleteData)


module.exports = router
