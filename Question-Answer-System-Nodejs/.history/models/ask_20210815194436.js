const Sequelize = require('sequelize');
const connection = require('../database');

const Question = connection.define('Question', {
    title: {
        type: 'string',
        allowNull: false
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Question.sync({force: false});