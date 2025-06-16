const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/login.routes');
const { swaggerUi, swaggerSpec } = require('../swagger/swagger');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/login', loginRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
