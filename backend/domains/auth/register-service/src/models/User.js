
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('User', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password_hash: { type: DataTypes.TEXT, allowNull: false },
  nickname: { type: DataTypes.STRING, allowNull: false },
  role_id: { type: DataTypes.INTEGER },
  is_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  verification_code: { type: DataTypes.STRING },
  reset_code: { type: DataTypes.STRING },
  is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;
