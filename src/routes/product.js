const express = require('express')
const route = express.Router()
const productControllor = require('../app/controllers/ProductController')

route.get('/', productControllor.getAllProduct)
route.get('/:id', productControllor.getProductById)
route.post('/insert', productControllor.insertProduct)
route.put('/:id', productControllor.updateProduct)
route.delete('/:id', productControllor.deleteProduct)

module.exports = route