
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Facultad = sequelize.define('Facultad', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  universidad_id: { type: DataTypes.UUID, allowNull: false }
}, {
  tableName: 'facultades',
  timestamps: false
});

module.exports = Facultad;
