const express = require('express');
const UserService = require('./../services/user.service');
const router = express.Router();
const service = new UserService();
//parametros tipo query
/**
 * listar los usuarios por paginacion
 * endpoints
 * no hay paramatros http://localhost:3000/users
 * http://localhost:3000/v1/users?size=3
 * param size = paginacion usuarios
 */
router.get('/', (req, res) => {
  const users = service.findAll();
  res.json(users);
});
/**
 * Buscar un usuario
 * enviamos cod http 201 de creado
 * simular que no existe
 */
router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.findOne(id);
  res.status(201).json(product);
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
