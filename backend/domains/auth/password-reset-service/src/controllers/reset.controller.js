const resetService = require('../services/reset.service');

const resetController = async (req, res) => {
  try {
    const result = await resetService(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = resetController;
