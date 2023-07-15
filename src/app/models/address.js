const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../config/db')

//Dựa vào địa chỉ để tính phí ship
const Address = sequelize.define("Address", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },//Xem thử có API tỉnh thành phố không
    specific_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_default: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Address
// cart phải thuộc về user -> User.hasOne(Cart) 
// user tồn tại mà không cần cart Cart.belongsTo(User) 