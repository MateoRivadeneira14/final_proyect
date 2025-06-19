const User = require('../models/User');
const validate = require('../utils/validateRole');

module.exports = async function assignRoleService(id, data) {
  const { error, value } = validate.validate(data);
  if (error) throw { status: 400, message: error.details[0].message };

  const user = await User.findByPk(id);
  if (!user) throw { status: 404, message: 'Usuario no encontrado' };

  const role_id = value.role === 'admin' ? 1 : value.role === 'director' ? 2 : 3;
  await user.update({ role_id });

  return { message: 'Rol actualizado correctamente' };
};
