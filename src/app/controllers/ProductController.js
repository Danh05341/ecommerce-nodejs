const Product = require('../models/product')
const productService = require('../../services/product')

class ProductControllor {

    async getAllProduct(req, res) {
        const page = parseInt(req.query.page) || 1
        const size = parseInt(req.query.size)
        const skip = (page - 1) * size
        const limit = size
        try {
            const data = await productService.getAllProduct({ skip, limit })
            res.status(200).json({
                status: 'success',
                message: 'get Product succesfully',
                data: data
            })
        } catch (error) {
            const statusCode = error.statusCode || 500
            res.status(statusCode).json({
                status: 'error',
                message: error.toString()
            })
        }

    }

    async getProductById(req, res) {
        try {
            const id = parseInt(req.params.id)
            const product = await productService.getProductById(id)
            res.status(200).json({
                product
            })
        } catch (error) {
            const statusCode = error.statusCode || 500
            res.status(statusCode).json({
                status: 'error',
                message: error.toString()
            })
        }
    }

    async insertProduct(req, res) {
        const { name, description, price, sale_price, image_url, quantity, status } = req.body
        try {
            const product = await productService.insertProduct({ name, description, price, sale_price, image_url, quantity, status })
            res.status(201).json({
                message: 'insert Product successfully',
                data: product
            })
        } catch (error) {
            const statusCode = error.statusCode || 500
            res.status(statusCode).json({
                status: 'error',
                message: error.toString()
            })
        }
    }

    async updateProduct(req, res) {
        try {
            const id = parseInt(req.params.id)
            const updatedData = req.body
            const updatedProduct = await productService.updateProduct(id, updatedData)
            res.status(200).json({
                message: 'updated Product successfully',
                data: updatedProduct
            });
        } catch (error) {
            const statusCode = error.statusCode || 500;
            res.status(statusCode).json({
                status: 'error',
                message: error.message
            });
        }
    }

    async deleteProduct(req, res) {
        try {
            const id = parseInt(req.params.id)
            const deletedProduct = await productService.deleteProduct(id)
            res.status(200).json({
                message: 'deleted Product successfully',
                data: deletedProduct
            });
        } catch (error) {
            const statusCode = error.statusCode || 500;
            res.status(statusCode).json({
                status: 'error',
                message: error.message
            });
        }
    }
}

module.exports = new ProductControllor 