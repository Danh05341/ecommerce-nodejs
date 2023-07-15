const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../config/db')

const Order_item = sequelize.define("Order_item", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_price: {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false
    },
    product_sale_price: {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false
    },
    product_image_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    shipping_fee: {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false
    },
    discount: {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false
    },
    total_price: {
        type: DataTypes.DECIMAL(10,3),
    },
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = Order_item
// cart phải thuộc về user -> User.hasOne(Cart) 
// user tồn tại mà không cần cart Cart.belongsTo(User) 