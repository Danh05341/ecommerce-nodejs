const Product = require('../models/product')
const productService = require('../../services/product')
const { Exception } = require('handlebars')

class ProductControllor {

    async getAllProduct(req, res) {
    //     // const page = req.query.page
    //     // const size = req.query.size
    //     // const skip = (page - 1) * size
    //     // const limit = size
    //     try {
    //         // const product = await productService.getAllProduct({skip, limit})
    //         const product = await productService.getAllProduct()

    //         res.status(200).json({
    //             message: 'get Product succesfully',
    //             data: product
    //         })
    //     } catch (error) {
    //         res.status(500).json({
    //             message: error.toString()
    //         })
    //     }
        
    }

    async insertProduct(req, res){
        const { name, description, price, sale_price, image_url, quantity, status } = req.body
        try {
            const product = await productService.insertProduct({ name, description, price, sale_price, image_url, quantity, status })
            if(!product) throw new Error("Insert product failed")
            res.status(201).json({
                message: 'insert Product successfully',
                data: product
            })
        } catch (error) {
            res.status(500).json({
                message: error.toString()
            })
        }
    }
}

module.exports = new ProductControllor 