
const express = require('express');
const router = express.Router();
const Universidad = require('../models/Universidad');
const Facultad = require('../models/Facultad');
const Carrera = require('../models/Carrera');

router.get('/universidades', async (req, res) => {
  try {
    const universidades = await Universidad.findAll();
    res.json(universidades);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/facultades', async (req, res) => {
  try {
    const { universidad_id } = req.query;
    if (!universidad_id) return res.status(400).json({ message: 'Falta universidad_id' });

    const facultades = await Facultad.findAll({ where: { universidad_id } });
    res.json(facultades);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/carreras', async (req, res) => {
  try {
    const { facultad_id } = req.query;
    if (!facultad_id) return res.status(400).json({ message: 'Falta facultad_id' });

    const carreras = await Carrera.findAll({ where: { facultad_id } });
    res.json(carreras);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
