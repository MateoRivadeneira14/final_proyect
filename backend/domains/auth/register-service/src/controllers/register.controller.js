const registerService = require('../services/register.service');

const registerController = async (req, res) => {
  try {
    const result = await registerService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = registerController;
