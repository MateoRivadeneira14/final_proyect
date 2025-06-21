
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const AdminInstitucional = sequelize.define('AdminInstitucional', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  user_id: { type: DataTypes.UUID, allowNull: false },
  universidad_id: { type: DataTypes.UUID, allowNull: false }
}, {
  tableName: 'admins_institucionales',
  timestamps: false
});

module.exports = AdminInstitucional;
