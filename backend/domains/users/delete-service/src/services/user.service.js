const User = require('../models/User');

module.exports = async function deleteUserService(id) {
  const user = await User.findByPk(id);
  if (!user) throw { status: 404, message: 'Usuario no encontrado' };

  await user.destroy();
  return { message: 'Usuario eliminado correctamente' };
};
