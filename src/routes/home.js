const express = require('express')
const route = express.Router()
const homeController = require('../app/controllers/HomeController');

route.get('/', homeController.getListProducts)

module.exports = route