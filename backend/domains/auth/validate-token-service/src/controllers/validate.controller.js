const validateService = require('../services/validate.service');

const validateController = async (req, res) => {
  try {
    const result = await validateService(req.headers.authorization);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 401).json({ message: error.message });
  }
};

module.exports = validateController;
