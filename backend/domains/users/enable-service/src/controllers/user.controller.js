const enableUserService = require('../services/user.service');

const enableUser = async (req, res) => {
  try {
    const result = await enableUserService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { enableUser };
