const { Exception } = require('handlebars')
const User = require('../app/models/user')
const bcrypt = require('bcrypt');

class userService {

    async login({email, password}) {
        const existingUser = await User.findAll({email: email})
            //encrypt password
        // bcrypt.compare(password, existingUser.password)
    
    }
    
    async register({email, password}) {
        try{
            const existingUser = await User.findOne({email: email})
            if(existingUser) {
                throw new Exception("User already exist")
            }
            const hashedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS)
            //insert to DB
            const newUser = await User.create({
                username,
                password: hashedPassword
            })
            return newUser
        }catch(exception) {
            throw new Exception("Cannot register user")
        }
    
    }
}

module.exports = new userService