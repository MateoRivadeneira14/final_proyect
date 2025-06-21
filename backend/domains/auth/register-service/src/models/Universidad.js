
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Universidad = sequelize.define('Universidad', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  ruc: { type: DataTypes.STRING, unique: true, allowNull: false },
  direccion: { type: DataTypes.TEXT },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'universidades',
  timestamps: false
});

module.exports = Universidad;
