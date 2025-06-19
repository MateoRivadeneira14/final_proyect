const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  nickname: Joi.string().min(3).required(),
  role: Joi.string().valid('admin', 'estudiante', 'director').required()
});

module.exports = userSchema;
