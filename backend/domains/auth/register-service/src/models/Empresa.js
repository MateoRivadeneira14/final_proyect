
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Empresa = sequelize.define('Empresa', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  user_id: { type: DataTypes.UUID, allowNull: false },
  nombre_empresa: { type: DataTypes.STRING },
  ruc_empresa: { type: DataTypes.STRING },
  direccion: { type: DataTypes.TEXT },
  telefono_contacto: { type: DataTypes.STRING },
  esta_aprobada: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  tableName: 'empresas',
  timestamps: false
});

module.exports = Empresa;
