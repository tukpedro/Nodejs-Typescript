const Sequelize = require('sequelize');

const connection = new Sequelize('ayq', 'root', '201041', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3000
});


module.exports = connection;