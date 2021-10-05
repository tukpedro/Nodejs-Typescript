const Sequelize = require("sequelize");
const connection = require("../database/mysql");

const Reply = connection.define("replys", {
  answerText: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  questionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Reply.sync({ force: false });

module.exports = Reply;
