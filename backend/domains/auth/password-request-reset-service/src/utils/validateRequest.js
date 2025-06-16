const Joi = require('joi');

const requestSchema = Joi.object({
  email: Joi.string().email().required()
});

module.exports = requestSchema;
