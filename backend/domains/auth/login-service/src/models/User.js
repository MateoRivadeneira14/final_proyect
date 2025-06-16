const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Role = require('./Role');

const User = sequelize.define('User', {
  id: { type: DataTypes.UUID, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password_hash: { type: DataTypes.TEXT, allowNull: false },
  nickname: { type: DataTypes.STRING(100), allowNull: false },
  role_id: { type: DataTypes.INTEGER },
  is_verified: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  tableName: 'users',
  timestamps: false
});

User.belongsTo(Role, { foreignKey: 'role_id' });

module.exports = User;
