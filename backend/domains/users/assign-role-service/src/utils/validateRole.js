const Joi = require('joi');

const roleSchema = Joi.object({
  role: Joi.string().valid('admin', 'estudiante', 'director').required()
});

module.exports = roleSchema;
