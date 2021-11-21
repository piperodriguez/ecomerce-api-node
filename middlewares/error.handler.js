/**
 * function logErros
 * imprime el error en consola
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function logErros (err, req, res, next){
  console.error('logErros');
  console.error(err);
  //ejecutando como middleware tipo error por que envia error
  next(err);
}

/**
 * function errorHandler
 * retorna el error al cliente por json
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

function errorHandler (err, req, res, next){
  console.error('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}


function boomErrorHandler (err, req, res, next){
  /**
   * como estamos trabajando con la dependencia de errores boom
   * si en algun lado el error se definio usando boom
   * se agrega la propiedad isBoom
   * si existe lo identificamos.
   */
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = {logErros, errorHandler, boomErrorHandler}
