const { Exception } = require('handlebars')
const User = require('../app/models/user')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


class userService {
    async login({ email, password }) {
        try {
            const existingUser = await User.findOne({ where: { email } })
            if (existingUser) {
                const isMatch = await bcrypt.compare(password, existingUser.password)
                if (isMatch) {
                    //tạo token
                    const token = jwt.sign({
                        data: existingUser.id,
                    },
                        process.env.JWT_SECRET,
                        {
                            // expiresIn: '10 days'
                            expiresIn: 10
                        })

                    return {
                        ...existingUser.get(),
                        password: 'not show',
                        token: token
                    }
                }
                else {
                    const error = new Error("Wrong email or password");
                    error.statusCode = 400;
                    throw error;
                }
            }
            else {
                const error = new Error("Wrong email or password");
                error.statusCode = 400;
                throw error;
            }
        } catch (error) {
            throw error
        }

    }

    async register({ email, password }) {
        try {
            const existingUser = await User.findOne({ where: { email } })
            if (existingUser) {
                var error = new Error("User already exists");
                error.statusCode = 400;//409
                throw error;
            }
            const hashedPassword = await bcrypt.hash(
                password,
                parseInt(process.env.SALT_ROUNDS)
            )
            //insert to DB
            const newUser = await User.create({
                email,
                password: hashedPassword
            })

            return {
                ...newUser.get(),
                password: 'not show'
            }

        } catch (error) {
            throw error
        }
    }
}

module.exports = new userService