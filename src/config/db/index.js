const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('e_shop_nodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// {alter: true} : sẽ thay đổi được các trường trong bảng, thêm bảng
// sequelize.sync({after: true}).then(() => {
//     console.log('sync database ');
// }).catch((error) => {
//     console.error('Unable to sync table : ', error);
// });

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { connect, sequelize }
