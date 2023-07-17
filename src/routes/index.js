const homeRouter = require('./home')
const productRouter = require('./product')
const userRouter = require('./users')
const adminRouter = require('./admin')

function route(app){
    app.use('/', homeRouter)
    app.use('/product', productRouter)
    app.use('/users', userRouter)
    app.use('/admin', adminRouter)

}

module.exports = route