const Sequelize = require("sequelize");
const connection = require("../database/mysql");

const Name = connection.define("names", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Name.sync({ force: false });

module.exports = Name;
