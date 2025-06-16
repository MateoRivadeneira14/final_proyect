const express = require('express');
const cors = require('cors');
const validateRoutes = require('./routes/validate.routes');
const { swaggerUi, swaggerSpec } = require('../swagger/swagger');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/validate', validateRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
