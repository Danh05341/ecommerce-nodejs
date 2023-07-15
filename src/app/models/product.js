const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../config/db')
const Category = require('./category')
const Supplier = require('./suplpier')
const Cart_item = require('./cart_item')


const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false
    },
    sale_price: {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false, 
    freezeTableName: true
});

Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

Supplier.hasMany(Product, { foreignKey: 'supplier_id' });
Product.belongsTo(Supplier, { foreignKey: 'supplier_id' });

Product.hasOne(Cart_item, { foreignKey: 'product_id' })
Cart_item.belongsTo(Product, { foreignKey: 'product_id' })

module.exports = Product