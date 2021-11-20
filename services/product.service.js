const faker = require('faker');


/**
 * logica de negocio productosxe
 */

class ProductsService{
  constructor(){
    //datos quemados por el momento
    this.products = [];
    //cada vez que se cargue la clase crea 100 productos default
    this.index();
  }
  /**
   * metodo index
   * lista los productos
   */
  index(){
    const cantProduct = 100;
    for (let i = 0; i < cantProduct; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
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
    return this.products;
  }
  /**
   * buscar elemento dentro del array
   * @param {*} id
   */
  findOne(id){
    return this.products.find(item => item.id === id);
  }
  create(){

  }

  update(){

  }
  delete(){

  }
}

module.exports = ProductsService;
