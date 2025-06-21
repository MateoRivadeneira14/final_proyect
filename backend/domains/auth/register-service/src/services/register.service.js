
const bcrypt = require('bcrypt');
const axios = require('axios');
const { sequelize } = require('../config/database');
const User = require('../models/User');
const Role = require('../models/Role');
const Estudiante = require('../models/Estudiante');
const Empresa = require('../models/Empresa');
const generateCode = require('../utils/generateCode');
const { validateEstudiante, validateEmpresa } = require('../utils/validateRegister');

async function registerService(body) {
  try {
    const tipo = (body.universidad_id && body.facultad_id && body.carrera_id)
      ? 'estudiante'
      : (body.nombre_empresa && body.ruc_empresa)
      ? 'empresa'
      : null;

    if (!tipo) throw new Error('No se pudo determinar el tipo de usuario.');

    const { error } = tipo === 'estudiante' ? validateEstudiante(body) : validateEmpresa(body);
    if (error) throw new Error(error.details[0].message);

    const { nickname, email, password } = body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new Error('El correo ya está registrado');

    const role = await Role.findOne({ where: { name: tipo } });
    if (!role) throw new Error('Rol no encontrado');

    const hashed = bcrypt.hashSync(password, 10);
    const verification_code = generateCode();

    const newUser = await User.create({
      email,
      password_hash: hashed,
      nickname,
      role_id: role.id,
      verification_code: verification_code
    });

    if (tipo === 'estudiante') {
      await Estudiante.create({
        user_id: newUser.id,
        universidad_id: body.universidad_id,
        facultad_id: body.facultad_id,
        carrera_id: body.carrera_id,
        cedula: body.cedula,
        telefono: body.telefono,
        fecha_nacimiento: body.fecha_nacimiento
      });
    }

    if (tipo === 'empresa') {
      await Empresa.create({
        user_id: newUser.id,
        nombre_empresa: body.nombre_empresa,
        ruc_empresa: body.ruc_empresa,
        direccion: body.direccion,
        telefono_contacto: body.telefono_contacto,
        estado: 'pendiente'
      });
    }

    await axios.post(process.env.SEND_CODE_URL, {
      email,
      code: verification_code
    });

    return { message: 'Usuario registrado correctamente' };
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { registerService };
