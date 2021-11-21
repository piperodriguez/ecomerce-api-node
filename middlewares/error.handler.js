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


module.exports = {logErros, errorHandler}
