const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User')(sequelize, DataTypes);

const Task = sequelize.define('Task', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

Task.belongsTo(User, { foreignKey: 'user_id' });

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    }
  });
  Task.belongsTo(User, {
    foreignKey: 'userId',
    as: 'User'
  });

  return Task;
};
