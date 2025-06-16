const Joi = require('joi');

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  nickname: Joi.string().min(3).max(100).required(),
  role: Joi.string().valid('estudiante', 'director').default('estudiante')
});

module.exports = registerSchema;
