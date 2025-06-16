const express = require('express');
const cors = require('cors');
const registerRoutes = require('./routes/register.routes');
const { swaggerUi, swaggerSpec } = require('../swagger/swagger');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/register', registerRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
