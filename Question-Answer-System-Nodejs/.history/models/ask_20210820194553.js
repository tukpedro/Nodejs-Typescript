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
    },
    hooks: {
        beforeFind: async (question) => {
            console.log(question);
        }
    }
});

Question.sync({force: false}).then(() => { // não força criar caso a tabela exista
    console.log('Table created!')
});

module.exports = Question;