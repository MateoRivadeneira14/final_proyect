const Joi = require('joi');

const updateSchema = Joi.object({
  nickname: Joi.string().min(3),
  role: Joi.string().valid('admin', 'estudiante', 'director'),
  is_verified: Joi.boolean()
}).min(1);

module.exports = updateSchema;
