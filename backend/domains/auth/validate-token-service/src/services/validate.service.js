const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async function validateService(authHeader) {
  if (!authHeader || !authHeader.startsWith('Bearer '))
    throw { status: 401, message: 'Token no proporcionado o inválido' };

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { valid: true, ...decoded };
  } catch (err) {
    throw { status: 401, message: 'Token inválido o expirado' };
  }
};
