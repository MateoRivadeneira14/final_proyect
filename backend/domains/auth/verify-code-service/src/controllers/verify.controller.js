const verifyService = require('../services/verify.service');

const verifyController = async (req, res) => {
  try {
    const result = await verifyService(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = verifyController;
