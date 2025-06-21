
const express = require('express');
const router = express.Router();
const {
  registerEstudiante,
  registerEmpresa
} = require('../controllers/register.controller');

router.post('/estudiante', registerEstudiante);
router.post('/empresa', registerEmpresa);

module.exports = router;
