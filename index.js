const express = require('express');
//importamos faker para crear datos random
const routerApi = require('./routes');
const app = express();
const port = 3000;
/**
 * defino middleware para entregar
 * datos en formato json
 */
app.use(express.json());
app.listen(port, ()=>{
  console.log('ejecutando en el puerto '+port);
});

app.get('/', (req, res) => {
  res.send('Servidor ejecutandose en express');
});

//llamando proxi de la app
routerApi(app);





