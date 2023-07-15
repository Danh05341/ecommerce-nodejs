const Product = require('../models/product')
const { mutipleSequelizeToObject } = require('../../util/sequelize')

class HomeController {
    async login(req, res, next){
        const username = req.body.username
        const passwword = req.body.passwword
        const User = {username, passwword}
        

    }   


    async getListProducts(req, res, next) {
        await Product.findAll()
            .then(listProducts => {
                console.log(mutipleSequelizeToObject(listProducts))
                res.render('home', {
                    listProducts: mutipleSequelizeToObject(listProducts)
                })
            })
            .catch(error => {
                res.status(400).json('loi')
            })
    }

}

module.exports = new HomeController()