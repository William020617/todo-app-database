const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_app', 'root', '020617', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
