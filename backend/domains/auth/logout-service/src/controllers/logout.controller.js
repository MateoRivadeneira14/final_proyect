const logoutController = async (req, res) => {
  res.status(200).json({ message: 'Logout exitoso (simbólico)' });
};

module.exports = logoutController;
