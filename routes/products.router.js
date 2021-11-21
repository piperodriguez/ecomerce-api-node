const express = require('express');
const ProductsService= require('./../services/product.service');
const router = express.Router();
const service = new ProductsService();
/**
 * Peticion que lista los productos
 * permite paginar los elementos mostrados en pantalla
 * end points
 * http://localhost:3000/products
 * http://localhost:3000/products?size=1
 */
 router.get('/', async (req, res) => {
  const products = await service.findAll();
  res.json(products);
});

//nuevo endpoint
//http://localhost:3000/products/11
//http://localhost:3000/api/v1/products/4ab5cb4f-bae4-416c-872f-11ff50e97b52

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

/**
 * crear producto
 */

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.json(newProduct);
});
/**
 * ruta para actualizar un valor del producto
 * valores atirbutos seleccionados
 */
 router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const producto = await service.update(id, body);
  res.json(producto);
});


/**
 * eliminar producto
 */

 router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const eliminar = await service.delete(id);
  res.json(eliminar);
});
module.exports = router;
