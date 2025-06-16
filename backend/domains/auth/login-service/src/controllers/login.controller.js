const loginService = require('../services/login.service');

const loginController = async (req, res) => {
  try {
    const result = await loginService(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = loginController;
