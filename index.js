const express = require('express');
//
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Servidor ejecutandose en express');
});

app.listen(port, ()=>{
  console.log('ejecutando en el puerto '+port);
});
