const userService = require('../services/user.service');

const deleteUser = async (req, res) => {
  try {
    const result = await userService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { deleteUser };
