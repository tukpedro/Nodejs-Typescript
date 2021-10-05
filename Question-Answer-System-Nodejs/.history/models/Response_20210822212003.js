const Sequelize = require("sequelize");
const connection = require("../database");

const Reply = connection.define("Replys", {
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
