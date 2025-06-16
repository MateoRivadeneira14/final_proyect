const User = require('../models/User');
const axios = require('axios');
const generateCode = require('../utils/generateCode');
const requestSchema = require('../utils/validateRequest');

module.exports = async function resetService(data) {
  const { error, value } = requestSchema.validate(data);
  if (error) throw { status: 400, message: error.details[0].message };

  const { email } = value;

  const user = await User.findOne({ where: { email } });
  if (!user) throw { status: 404, message: 'Usuario no encontrado' };
  if (!user.is_verified) throw { status: 403, message: 'Cuenta no verificada' };

  const resetCode = generateCode(6);
  user.reset_code = resetCode;
  await user.save();

  try {
    await axios.post(process.env.SEND_CODE_URL, {
      email,
      code: resetCode
    });
  } catch (err) {
    console.error('Error enviando el código por correo:', err.message);
    throw { status: 502, message: 'Error al enviar el correo' };
  }

  return { message: 'Código de restablecimiento enviado' };
};
