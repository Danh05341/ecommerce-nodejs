const User = require('../models/user')
const userService = require('../../services/user')

class UserController {
    //[GET]
    async getUsers(req, res) {
        res.send('GET Users')
    }
    //[GET]
    async getUserDetail(req, res) {
        res.send(`GET details User by id ${req?.params?.id}`)
    }
    //[POST]
    async insertUser(req, res) {
        res.send('POST insert User')
    }
    //[POST]
    async loginUser(req, res) {
        const { username, password } = req.body
        res.send('POST login Users')

    }
    //[POST]
    async registerUser(req, res) {
        const {username, password} = req.body
        const user = await userService.register
    }
    // async getAllUser(req, res) {
    //     User.findAll()
    //         .then(data => {
    //             res.json(data)
    //         }) 
    //         .catch(error => {
    //             res.json(error)
    //         })
    // }
}

module.exports = new UserController 