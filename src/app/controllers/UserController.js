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
        const { email, password } = req.body
        try {
            const existingUser = await userService.login({email, password})
            res.status(200).json({
                message: 'Login user successfully',
                data: existingUser
            })
        } catch (error) {
            const statusCode = error.statusCode || 500
            res.status(statusCode).json({
                status: 'error',
                message: error.toString()
            })
        }

    }
    //[POST]
    async registerUser(req, res) {
        const {email, password} = req.body
        try {
            const user = await userService.register({email, password})
            res.status(201).json({
                message: 'Register user successfully',
                data: user
            })

        } catch (error) {
            const statusCode = error.statusCode || 500
            res.status(statusCode).json({
                status: 'error',
                message: error.toString()
            })
        }
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