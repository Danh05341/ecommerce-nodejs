module.exports = {
    sequelizeToObject: function(sequelize) {
        return sequelize.toJson()
    },

    mutipleSequelizeToObject: function(sequelize) {
        return sequelize.map(sequelize => sequelize.get())
    }

}