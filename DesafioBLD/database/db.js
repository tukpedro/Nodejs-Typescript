// Conexão com MYSQL
const Sequelize = require("sequelize");

const connection = new Sequelize("apidb", "root", "201041", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
