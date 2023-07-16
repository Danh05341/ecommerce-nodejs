const { Exception } = require('handlebars')
const User = require('../app/models/user')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


class userService {

    async login({ email, password }) {
        const existingUser = await User.findOne({where: {email}})
        if(existingUser) {
            const isMatch = await bcrypt.compare(password, existingUser.password)
            if(isMatch) {
                //tạo token
                const token = jwt.sign({
                    data: existingUser.id
                },
                process.env.JWT_SECRET,
                {
                    // expiresIn: '10 days'
                    expiresIn: 10 // 1 minute
                })

                return {
                    ...existingUser.get(),
                    password: 'not show',
                    token
                }
            } 
            else {
                throw new Exception("Wrong email or password")
            }
        }
        else {
            throw new Exception("Wrong email or password")
        }
    }

    async register({ email, password }) {
        const existingUser = await User.findOne({where: {email}})
        if (existingUser) {
            throw new Exception("User already exist")
        }
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
        //insert to DB
        const newUser = await User.create({
            email,
            password: hashedPassword
        })

        return {
            ...newUser.get(),
            password: 'not show'
        }
        
    }
}

module.exports = new userService