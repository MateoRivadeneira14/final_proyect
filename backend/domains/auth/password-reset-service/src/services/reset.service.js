const User = require('../models/User');
const bcrypt = require('bcrypt');
const resetSchema = require('../utils/validateReset');

module.exports = async function resetService(data) {
  const { error, value } = resetSchema.validate(data);
  if (error) throw { status: 400, message: error.details[0].message };

  const { email, code, new_password } = value;

  const user = await User.findOne({ where: { email, reset_code: code } });
  if (!user) throw { status: 404, message: 'Código inválido o usuario no encontrado' };

  const hash = await bcrypt.hash(new_password, 10);
  user.password_hash = hash;
  user.reset_code = null;

  await user.save();

  return { message: 'Contraseña restablecida exitosamente' };
};
