const express = require('express');
const faker = require('faker');
const router = express.Router();

//parametros tipo query
/**
 * listar los usuarios por paginacion
 * endpoints
 * no hay paramatros http://localhost:3000/users
 * http://localhost:3000/v1/users?size=3
 * param size = paginacion usuarios
 */
router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 5;
  for (let i = 0; i < limit; i++) {
    users.push({
      username: faker.name.firstName(),
      phone: parseInt(faker.phone.phoneNumber())
    });
  }
  res.json(users);
});
/**
 * Buscar un usuario
 * enviamos cod http 201 de creado
 * simular que no existe
 */
router.get('/:id', (req, res) => {
  const {id} = req.params;
  if (id == 999) {
    res.status(404).json({
      message: 'No existe',
    });
  }
  res.status(201).json({
    id,
    name: 'usuario',
    price: 2000
  });
});
/**
 * Crear Usuario
 */
 router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});

/**
 * Modificar Usuarios
 */

 router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    id,
    data: body,
    message: 'Usuario actualzado',
  });
});


/**
 * Eliminar usuario
 */
 router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    message: 'Usuario eliminado',
  });
});

module.exports = router;
