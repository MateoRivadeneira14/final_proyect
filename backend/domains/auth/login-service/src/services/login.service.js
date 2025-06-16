const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginSchema = require('../utils/validateLogin');

module.exports = async function loginService(data) {
  const { error, value } = loginSchema.validate(data);
  if (error) throw { status: 400, message: error.details[0].message };

  const { email, password } = value;

  const user = await User.findOne({
    where: { email },
    include: { model: Role, attributes: ['name'] }
  });

  if (!user) throw { status: 404, message: 'Usuario no encontrado' };
  if (!user.is_verified) throw { status: 403, message: 'Cuenta no verificada' };

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) throw { status: 401, message: 'Contraseña incorrecta' };

  const token = jwt.sign(
    { id: user.id, role: user.Role.name, nickname: user.nickname },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return {
    token,
    role: user.Role.name,
    nickname: user.nickname
  };
};
