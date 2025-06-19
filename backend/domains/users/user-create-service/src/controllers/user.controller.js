const userService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    const result = await userService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { createUser };
