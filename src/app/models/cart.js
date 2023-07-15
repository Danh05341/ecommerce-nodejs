const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../config/db')
const Cart_item = require('./cart_item')

const Cart = sequelize.define("Cart", {
    
}, {
    timestamps: false,
    freezeTableName: true
});

Cart.hasMany(Cart_item, { foreignKey: 'cart_id' });
Cart_item.belongsTo(Cart, { foreignKey: 'cart_id' })

module.exports = Cart
