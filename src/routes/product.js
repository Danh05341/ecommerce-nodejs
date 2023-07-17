const express = require('express')
const route = express.Router()
const productControllor = require('../app/controllers/ProductController')

route.get('/', productControllor.getAllProduct)

route.post('/insert', productControllor.insertProduct)


module.exports = route