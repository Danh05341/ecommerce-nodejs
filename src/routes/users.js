const express = require('express')
const route = express.Router()
const userControllor = require('../app/controllers/UserController')

route.get('/', userControllor.getUsers)

route.get('/:id', userControllor.getUserDetail)

route.post('/insert', userControllor.insertUser)

//patch: không tìm thấy đối tượng sẽ tự động tạo mới
//put: nếu không tìm thấy thì không làm gì
route.patch('/', (req, res) => {
    res.send('PATCH User')
})



route.post('/login', userControllor.loginUser)

route.post('/register', )


module.exports = route