const express = require('express');
const cors = require('cors');
const verifyRoutes = require('./routes/verify.routes');
const { swaggerUi, swaggerSpec } = require('../swagger/swagger');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/verify', verifyRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
