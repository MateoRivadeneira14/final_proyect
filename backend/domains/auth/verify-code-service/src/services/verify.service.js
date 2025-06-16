const User = require('../models/User');
const verifySchema = require('../utils/validateVerify');

module.exports = async function verifyService(data) {
  const { error, value } = verifySchema.validate(data);
  if (error) throw { status: 400, message: error.details[0].message };

  const { email, code } = value;

  const user = await User.findOne({ where: { email, verification_code: code } });
  if (!user) throw { status: 404, message: 'Código incorrecto o usuario no encontrado.' };

  user.is_verified = true;
  user.verification_code = null;
  await user.save();

  return { message: 'Verificación exitosa' };
};
