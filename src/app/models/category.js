const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../config/db')

const Category = sequelize.define("Category", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = Category