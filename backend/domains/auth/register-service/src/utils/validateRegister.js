
const Joi = require('joi');

const estudianteSchema = Joi.object({
  nickname: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  universidad_id: Joi.string().required(),
  facultad_id: Joi.string().required(),
  carrera_id: Joi.string().required(),
  cedula: Joi.string().required(),
  telefono: Joi.string().required(),
  fecha_nacimiento: Joi.date().required()
});

const empresaSchema = Joi.object({
  nickname: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  nombre_empresa: Joi.string().required(),
  ruc_empresa: Joi.string().length(13).required(),
  direccion: Joi.string().required(),
  telefono_contacto: Joi.string().min(7).required()
});

function validateEstudiante(data) {
  return estudianteSchema.validate(data);
}

function validateEmpresa(data) {
  return empresaSchema.validate(data);
}

module.exports = { validateEstudiante, validateEmpresa };
