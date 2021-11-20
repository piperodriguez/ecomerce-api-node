const express = require('express');
const router = express.Router();

//parametros tipo query
/**
 * endpoints
 * no hay paramatros http://localhost:3000/users
 * http://localhost:3000/users?limit=10&offset=200
 */

router.get('/', (req, res) => {
  const {limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
});

module.exports = router;
