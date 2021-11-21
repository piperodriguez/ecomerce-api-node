const faker = require('faker');


/**
 * logica de negocio productosxe
 */

class UserService{
  constructor(){
    //datos quemados por el momento
    this.users = [];
    //cada vez que se cargue la clase crea 100 productos default
    this.index();
  }
  /**
   * metodo index
   * lista los productos
   */
  async index(){
    const cantUsuarios = 100;
    for (let i = 0; i < cantUsuarios; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        username: faker.name.firstName(),
        phone: parseInt(faker.phone.phoneNumber())
      });
    }
  }
  /**
   * metodo findAll
   * como al cargar la clase se alimenta
   * el array de productos
   * solo retorna
   */
  findAll(){
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve(this.users);
      }, 4500);
    }, 2000);
  }
  /**
   * buscar elemento dentro del array
   * @param {*} id
   */
  async findOne(id){
    return this.users.find(item => item.id === id);
  }
  /**
   * Funcion crear usuario
   * @param {*} data
   * @returns
   */
  create(data){
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.users.push(newUser);
    return newUser;

  }

  async update(id, cambios){
    const posicion = this.users.findIndex(item => item.id === id);
    if (posicion === -1) {
      throw new Error('Usuario no encontrado');
    }
    const usuario = this.users[posicion];
    this.users[posicion] = {
      ...usuario,
      ...cambios
    };
    return this.users[posicion];
  }
  async delete(id){
    const posicion = this.users.findIndex(item => item.id === id);
    if (posicion === -1) {
      throw new Error('Usuario no encontrado');
    }
    this.users.splice(posicion, 1);
    return id;
  }
}

module.exports = UserService;
