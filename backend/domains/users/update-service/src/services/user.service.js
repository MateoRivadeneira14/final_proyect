const User = require('../models/User');
const validate = require('../utils/validateUpdate');

module.exports = async function updateUserService(id, data) {
  const { error, value } = validate.validate(data);
  if (error) throw { status: 400, message: error.details[0].message };

  const user = await User.findByPk(id);
  if (!user) throw { status: 404, message: 'Usuario no encontrado' };

  if (value.role) {
    value.role_id = value.role === 'admin' ? 1 : value.role === 'director' ? 2 : 3;
    delete value.role;
  }

  await user.update(value);
  return { message: 'Usuario actualizado correctamente' };
};
