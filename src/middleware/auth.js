const jwt = require('jsonwebtoken')

module.exports = {
    checkToken: function(req, res, next) {
        const token = req.headers?.authorization?.split(" ")[1]
        try {
            const jwtObject = jwt.verify(token, process.env.JWT_SECRET)
            // const isExpired = Date.now() >= jwtObject.exp * 1000
            // if(isExpired) {
            //     res.status(400).json({
            //         message: 'Token is expired'
            //     })
            // }
            next()
        } catch (exception) {
            res.status(500).json({
                message: exception.toString()
            })
        }

    }


}