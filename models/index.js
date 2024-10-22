const Sequelize = require('sequelize');
const sequelize = new Sequelize('todo_app', 'root', '020617', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = require('./User')(sequelize, Sequelize.DataTypes);
const Task = require('./Task')(sequelize, Sequelize.DataTypes);

Task.belongsTo(User, { foreignKey: 'userId', as: 'user' });

const db = {
  User,
  Task,	
  sequelize,
  Sequelize
};

module.exports = db;
