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
  create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id, cambios){
    //buscmaos la posicion en el array
    const posicion = this.products.findIndex(item => item.id === id);
    if (posicion === -1) {
      throw new Error('Producto no encontrado');
    }
    const producto = this.products[posicion];
    this.products[posicion] = {
      ...producto,
      ...cambios
    };
    return this.products[posicion];
  }
  delete(id){
    const posicion = this.products.findIndex(item => item.id === id);
    if (posicion === -1) {
      throw new Error('Producto no encontrado');
    }
    this.products.splice(posicion, 1);
    return id;
  }
}

module.exports = ProductsService;
