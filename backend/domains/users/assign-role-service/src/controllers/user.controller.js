const assignRoleService = require('../services/user.service');

const assignRole = async (req, res) => {
  try {
    const result = await assignRoleService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { assignRole };
