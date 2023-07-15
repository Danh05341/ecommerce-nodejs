const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../config/db')

const Supplier = sequelize.define("Supplier", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    timestamps: false,
    freezeTableName: true
});



module.exports = Supplier