const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../config/db')

const Cart_item = sequelize.define("Cart_item", {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Cart_item
