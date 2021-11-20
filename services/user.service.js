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
  index(){
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
    return this.users;
  }
  /**
   * buscar elemento dentro del array
   * @param {*} id
   */
  findOne(id){
    return this.users.find(item => item.id === id);
  }
  create(){

  }

  update(){

  }
  delete(){

  }
}

module.exports = UserService;
