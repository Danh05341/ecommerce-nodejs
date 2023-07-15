const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../config/db')
const Address = require('./address');
const Order_item = require('./order_item');



const Order = sequelize.define("Order", {
    order_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    shipping_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    delivered_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total_price: {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Address.hasMany(Order, { foreignKey: 'address_id' })
Order.belongsTo(Address, { foreignKey: 'address_id' })

Order.hasMany(Order_item, { foreignKey: 'order_id' });
Order_item.belongsTo(Order, { foreignKey: 'order_id' })

module.exports = Order
