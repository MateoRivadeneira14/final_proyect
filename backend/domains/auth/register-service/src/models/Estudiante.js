
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Estudiante = sequelize.define('Estudiante', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  user_id: { type: DataTypes.UUID, allowNull: false },
  universidad_id: { type: DataTypes.UUID, allowNull: false },
  facultad_id: { type: DataTypes.UUID, allowNull: false },
  carrera_id: { type: DataTypes.UUID, allowNull: false },
  cedula: { type: DataTypes.STRING },
  telefono: { type: DataTypes.STRING },
  fecha_nacimiento: { type: DataTypes.DATE }
}, {
  tableName: 'estudiantes',
  timestamps: false
});

module.exports = Estudiante;
