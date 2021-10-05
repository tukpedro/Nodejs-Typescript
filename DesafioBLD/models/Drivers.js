// Model da tabela drivers do BD
const Sequelize = require("sequelize");
const connection = require("../database/db");

const Drivers = connection.define("drivers", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  postalCode: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Drivers.sync({ force: false });

module.exports = Drivers;
