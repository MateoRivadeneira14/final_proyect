const userService = require('../services/user.service');

const getUsers = async (req, res) => {
  try {
    const { id, email } = req.query;
    const users = await userService({ id, email });
    res.status(200).json(users);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { getUsers };
