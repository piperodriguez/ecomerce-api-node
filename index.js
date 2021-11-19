const express = require('express');
//
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Servidor ejecutandose en express');
});

app.get('/welcome', (req, res) => {
  res.send('bienvenido');
});

app.get('/products', (req, res) => {
  res.json({
    name:'Producto1',
    price: 1000
  });
});

app.listen(port, ()=>{
  console.log('ejecutando en el puerto '+port);
});
