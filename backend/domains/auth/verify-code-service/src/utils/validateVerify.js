const Joi = require('joi');

const verifySchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().length(6).required()
});

module.exports = verifySchema;
