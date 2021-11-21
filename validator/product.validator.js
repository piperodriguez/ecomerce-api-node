const Joi = require('joi');

/**
 * vamos a hacer una validacion por campo
 * tipos de datos
 */

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(20);
const price = Joi.number().integer().min(10);

/**
 * validacion crear producto
 */
const createProductValidate = Joi.object({
  name: name.required(),
  price: price.required()
});
/**
 * validacion actualizar producto
 */
const updateProductValidate = Joi.object({
  name: name,
  price: price
});
/**
 * validacion obtener el producto
 */
const getProductValidate = Joi.object({
  id: id.required()
});

/**
 * exportamos nuestras funcionalidades
 */
module.exports = {createProductValidate, updateProductValidate, getProductValidate};
