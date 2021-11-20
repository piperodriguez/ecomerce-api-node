const express = require('express');
const faker = require('faker');
const router = express.Router();
/**
 * Peticion que lista los productos
 * permite paginar los elementos mostrados en pantalla
 * end points
 * http://localhost:3000/products
 * http://localhost:3000/products?size=1
 */
 router.get('/', (req, res) => {
  const products = [];
  /**
   * para recibir parametros, si viene o valor por defecto
   */
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }
  res.json(products);
});

//nuevo endpoint
//http://localhost:3000/products/11

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'Prodicto1',
    price: 2000
  });
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
