const { Sequelize } = require('sequelize');
require('dotenv').config();
console.log("DB_URL desde .env:", process.env.DB_URL);


const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    logging: false,
});

module.exports = { sequelize };
