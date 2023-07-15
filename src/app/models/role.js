const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../config/db')

const Role = sequelize.define('Role', {
    name: {
        type: DataTypes.STRING,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false,
    freezeTableName: true
});



// Role.bulkCreate(
//     [
//         {
//             name: "admin",
//             description: "Quản trị viên"
//         },
//         {
//             name: "user",
//             description: "Người dùng"
//         }
//     ]) 

module.exports = Role;