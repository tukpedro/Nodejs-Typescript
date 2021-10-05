const Sequelize = require('sequelize');
const connection = require('../database/mysql');

const Question = connection.define('questions', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Question.sync({force: false}).then(() => {
    console.log('Table created!')
});

module.exports = Question;