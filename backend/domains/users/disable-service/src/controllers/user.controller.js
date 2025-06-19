const disableUserService = require('../services/user.service');

const disableUser = async (req, res) => {
  try {
    const result = await disableUserService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { disableUser };
