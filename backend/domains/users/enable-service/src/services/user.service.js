const User = require('../models/User');

module.exports = async function enableUserService(id) {
  const user = await User.findByPk(id);
  if (!user) throw { status: 404, message: 'Usuario no encontrado' };

  await user.update({ is_verified: true });
  return { message: 'Usuario habilitado correctamente' };
};
