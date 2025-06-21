
const registerService = require('../services/register.service');

const registerEstudiante = async (req, res) => {
  try {
    const result = await registerService.registerService(req.body, 'estudiante');
    res.status(201).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const registerEmpresa = async (req, res) => {
  try {
    const result = await registerService.registerService(req.body, 'empresa');
    res.status(201).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = {
  registerEstudiante,
  registerEmpresa
};
