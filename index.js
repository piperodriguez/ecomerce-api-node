const express = require('express');
const cors = require('cors');
//importamos faker para crear datos random
const routerApi = require('./routes');
//importante middleware
const {logErros, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
const app = express();
const port = process.env.PORT || 3000;
/**
 * defino middleware para entregar
 * datos en formato json
 */
app.use(express.json());
//habilitar a cualquier dominio OJO !!!! peligroso si es publica si si no mmmmmmmmmmmm
//definamos quienes pueden realizar peticiones tienen permiso de ahcer request
const whiteHost = ['https://infinite-chamber-27315.herokuapp.com/', 'https://totumaexpress.com'];
const options = {
  origin: (origin, callback)=>{
    //verifico contra mi lista blanca, si la peticion es aceptable
    if (whiteHost.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Servidor ejecutandose en express');
});

//llamando proxi de la app
routerApi(app);
//llamado de middlewares

app.use(logErros);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, ()=>{
  console.log('ejecutando en el puerto '+port);
});
