const Joi = require('joi');

const resetSchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().required(),
  new_password: Joi.string().min(8).required()
});

module.exports = resetSchema;
