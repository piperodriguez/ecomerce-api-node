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
router.get('/', async(req, res) => {
  const users = await service.findAll();
  res.json(users);
});
/**
 * Buscar un usuario
 * enviamos cod http 201 de creado
 * simular que no existe
 */
router.get('/:id', async(req, res) => {
  const {id} = req.params;
  const product = await service.findOne(id);
  res.status(200).json(product);
});
/**
 * Crear Usuario
 */
 router.post('/', async(req, res) => {
   const body = req.body;
   const newUser = await service.create(body);
   res.json(newUser);
});

/**
 * Modificar Usuariosa
 */

 router.patch('/:id', async(req, res) => {
   try {
    const {id} = req.params;
    const body = req.body;
    const user = await service.update(id, body);
    res.status(200).json(user);

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});


/**
 * Eliminar usuario
 */
 router.delete('/:id', async (req, res) => {
   try {
     const {id} = req.params;
     const eliminar = await service.delete(id);
     res.status(204).json(eliminar);
   } catch (error) {
    res.status(400).json({
      message: error.message
    });
   }
});
module.exports = router;
