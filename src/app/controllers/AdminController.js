const Product = require('../models/product')
const { mutipleSequelizeToObject } = require('../../util/sequelize')

class AdminController {

    async index(req, res) {
       
    }
    async addProduct(req, res) {
        let product = req.body
        await Product.create({
            product
        })
    }

}

module.exports = new AdminController()