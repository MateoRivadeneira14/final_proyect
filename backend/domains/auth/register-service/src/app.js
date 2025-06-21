
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const registerRoutes = require('./routes/register.routes');
const metaRoutes = require('./routes/meta.routes');

app.use(cors());
app.use(express.json());

app.use('/api/register', registerRoutes);
app.use('/api', metaRoutes);

module.exports = app;
