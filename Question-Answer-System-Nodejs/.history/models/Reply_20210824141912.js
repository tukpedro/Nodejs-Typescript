const Sequelize = require("sequelize");
const connection = require("../database/mysql");

const Response = connection.define("responses", {
  answerText: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  questionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Response.sync({ force: false });

module.exports = Response;
