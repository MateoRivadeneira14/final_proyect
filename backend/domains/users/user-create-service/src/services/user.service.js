const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const validate = require('../utils/validateUser');

module.exports = async function createUserService(data) {
  const { error, value } = validate.validate(data);
  if (error) throw { status: 400, message: error.details[0].message };

  const { email, password, nickname, role } = value;

  const existing = await User.findOne({ where: { email } });
  if (existing) throw { status: 409, message: 'El usuario ya existe' };

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    id: uuidv4(),
    email,
    password_hash: hash,
    nickname,
    role_id: role === 'admin' ? 1 : role === 'director' ? 2 : 3,
    is_verified: true
  });

  return { message: 'Usuario creado correctamente', user_id: user.id };
};
