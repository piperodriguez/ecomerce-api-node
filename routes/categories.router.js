const express = require('express');
const { report } = require('./products.router');
const router = express.Router();


//endpoint recibiendo 2 parametros
//http://localhost:3000/categories/11/products/12
router.get('/:idCategory/products/:idProduct', (req, res) => {
  const {idCategory, idProduct } = req.params;
  res.json({
    idCategory,
    idProduct
  });
});

module.exports = router;
