// Model da tabela vehicles do BD 
const Sequelize = require("sequelize");
const connection = require("../database/db");
const Drivers = require("../models/Drivers")

const Vehicles = connection.define("vehicles", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  plate: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  driverId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
});

// Relações das tabelas
Drivers.hasMany(Vehicles)
Vehicles.belongsTo(Drivers)

Vehicles.sync({ force: false });

module.exports = Vehicles;
