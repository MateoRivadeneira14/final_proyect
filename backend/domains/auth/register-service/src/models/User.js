const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Role = require('./Role');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password_hash: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  nickname: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  role_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'roles',
      key: 'id'
    }
  },
  is_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  verification_code: {
    type: DataTypes.STRING(10)
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'users',
  timestamps: false
});

User.belongsTo(Role, { foreignKey: 'role_id' });

module.exports = User;
