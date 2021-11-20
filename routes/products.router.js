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
 router.get('/', (req, res) => {
  const products = service.findAll();
  res.json(products);
});

//nuevo endpoint
//http://localhost:3000/products/11
//http://localhost:3000/api/v1/products/4ab5cb4f-bae4-416c-872f-11ff50e97b52

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.findOne(id);
  res.json(product);
});

/**
 * ruta put para actualizar todo el producto
 * necesita todos los valores del objeto
 */

/**
 * ruta para actualizar un valor del producto
 * valores atirbutos seleccionados
 */
 router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    id,
    data: body,
    message: 'producto actualzado',
  });
});

/**
 * crear producto
 */

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});

/**
 * eliminar producto
 */

 router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    message: 'producto eliminado',
  });
});
module.exports = router;
