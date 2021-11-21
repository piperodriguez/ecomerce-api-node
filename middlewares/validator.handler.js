const boom = require('@hapi/boom');
function validatorHandler(rules, property){
  //closures
  //para que envio todo los errores al tiempo abortEarly:false
  return (req, res, next) =>{
    const data = req[property];
    const {error} = rules.validate(data, { abortEarly:false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
