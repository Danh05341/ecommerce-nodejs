const express = require('express')
const route = express.Router()
const userControllor = require('../app/controllers/UserController')
const { checkToken } = require('../middleware/auth.js')

route.post('/login', userControllor.loginUser)

route.post('/register', userControllor.registerUser)

route.get('/', userControllor.getUsers)

route.get('/:id', userControllor.getUserDetail)

route.post('/insert', checkToken, userControllor.insertUser)

//patch: không tìm thấy đối tượng sẽ tự động tạo mới
//put: nếu không tìm thấy thì không làm gì
route.patch('/', (req, res) => {
    res.send('PATCH User')
})






module.exports = route