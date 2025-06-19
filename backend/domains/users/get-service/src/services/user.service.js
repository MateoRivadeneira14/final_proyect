const User = require('../models/User');

module.exports = async function getUserService({ id, email }) {
  if (id) {
    const user = await User.findByPk(id);
    if (!user) throw { status: 404, message: 'Usuario no encontrado' };
    return user;
  }
  if (email) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw { status: 404, message: 'Usuario no encontrado' };
    return user;
  }
  return await User.findAll();
};
