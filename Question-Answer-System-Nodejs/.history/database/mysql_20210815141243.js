const sequelize = require('sequelize');

const connection = new sequelize('ayq', 'root', '201041', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = connection;