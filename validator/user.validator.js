const Joi = require('joi');

/**
 * vamos a hacer una validacion por campo
 * tipos de datos
 */

const id = Joi.string().uuid();
const username = Joi.string().min(3).max(10);
const phone = Joi.number().integer().min(10);

/**
 * validacion crear user
 */
const createUserValidate = Joi.object({
  username: username.required(),
  phone: phone.required()
});
/**
 * validacion actualizar user
 */
const updateUserValidate = Joi.object({
  username: username,
  phone: phone
});
/**
 * validacion obtener el user
 */
const getUserValidate = Joi.object({
  id: id.required()
});

/**
 * exportamos nuestras funcionalidades
 */
module.exports = {createUserValidate, updateUserValidate, getUserValidate};
