const bcrypt = require('bcrypt');
const axios = require('axios');
const User = require('../models/User');
const Role = require('../models/Role');
const generateCode = require('../utils/generateCode');
const registerSchema = require('../utils/validateRegister');

module.exports = async function registerService(data) {
  const { error, value } = registerSchema.validate(data);
  if (error) throw { status: 400, message: error.details[0].message };

  const { email, password, nickname, role } = value;

  // Buscar el rol
  const roleRecord = await Role.findOne({ where: { name: role } });
  if (!roleRecord) throw { status: 400, message: 'Rol no válido.' };

  if (role === 'admin') {
    throw { status: 403, message: 'No se permite registrar administradores desde este servicio.' };
  }

  // Verificar si el usuario ya existe
  const exists = await User.findOne({ where: { email } });
  if (exists) throw { status: 409, message: 'El usuario ya existe.' };

  // Crear usuario
  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationCode = generateCode(6);

  const user = await User.create({
    email,
    password_hash: hashedPassword,
    nickname,
    role_id: roleRecord.id,
    verification_code: verificationCode
  });

  try {
    await axios.post(process.env.SEND_CODE_URL, {
      email,
      code: verificationCode
    });
  } catch (err) {
    console.error('Error enviando el código:', err.message);
  }

  // Emitir evento ficticio
  console.log(`📨 Emitiendo evento: Usuario registrado -> Enviar código ${verificationCode} a ${email}`);

  return { message: 'Usuario registrado exitosamente. Verifica tu correo.', userId: user.id };
}
