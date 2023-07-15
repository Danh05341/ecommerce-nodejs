const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../config/db')
const Role = require('./role');
const Address = require('./address')
const Order = require('./order')
const Cart = require('./cart')

const User = sequelize.define("User", {
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
});
User.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(User, { foreignKey: 'role_id' })

User.hasMany(Address, { foreignKey: 'user_id' });
Address.belongsTo(User, { foreignKey: 'user_id' })

User.hasOne(Cart, { foreignKey: 'user_id' });
Cart.belongsTo(User, { foreignKey: 'user_id' })
// cart phải thuộc về user -> User.hasOne(Cart) 
// user tồn tại mà không cần cart Cart.belongsTo(User) 

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' })


// let role, user
// Role.findOne()
//     .then( data => {
//         role = data
//         return User.findAll()
//     })
//     .then( data => {
//         user = data
//         return user.map(user => user.setRole(role))
//     })
//     .then( data => {
//         console.log(data)
//     })
//     .catch(e => console.log(e))

// User.bulkCreate(
//     [
//         {
//             email: "danh05345@gmail.com",
//             password: "123456"
//         },
//         {
//             email: "danh05346@gmail.com",
//             password: "123456"
//         }
//     ]) 



module.exports = User