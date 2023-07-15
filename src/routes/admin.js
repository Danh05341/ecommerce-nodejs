const express = require('express')
const route = express.Router()
const adminController = require('../app/controllers/AdminController');

route.get('/', adminController.index)


module.exports = route