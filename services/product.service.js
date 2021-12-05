const faker = require('faker');
const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
/**
 * logica de negocio productosxe
 */

class ProductsService{
  constructor(){
    //datos quemados por el momento
    this.products = [];
    //cada vez que se cargue la clase crea 100 productos default
    this.index();
    //conexion a la base de datos

    this.pool = pool;
    this.pool.on('error', (err)=> console.log(err));
  }
  /**
   * metodo index
   * lista los productos
   */
  async index(){
    const cantProduct = 100;
    for (let i = 0; i < cantProduct; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        mostrar: faker.datatype.boolean()
      });
    }
  }
  /**
   * metodo findAll
   * como al cargar la clase se alimenta
   * el array de productos
   * se implementa conexion de datos con postgresql
   * solo retorna
   */
  async findAll(){
    const strQuery = 'SELECT * FROM products';
    const response = await this.pool.query(strQuery);
    return response.rows;
  }
  /**
   * buscar elemento dentro del array
   * @param {*} id
   */
  findOne(id){
    const producto = this.products.find(item => item.id === id);
    //validar la existencia del producto
    if (!producto) {
      throw boom.notFound("Producto no encontrado");
    }
    //validar el estado del producto 409
    if (producto.mostrar === false) {
      throw boom.conflict("No tiene acceso a este producto");
    }
    return producto;
  }
  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async update(id, cambios){
    //buscmaos la posicion en el array
    const posicion = this.products.findIndex(item => item.id === id);
    if (posicion === -1) {
      throw boom.notFound("Producto no encontrado");
    }
    const producto = this.products[posicion];
     //validar el estado del producto 409
    if (producto.mostrar === false) {
      throw boom.conflict("No tiene acceso a este producto");
    }
    this.products[posicion] = {
      ...producto,
      ...cambios
    };
    return this.products[posicion];
  }
  async delete(id){
    const posicion = this.products.findIndex(item => item.id === id);
    if (posicion === -1) {
      throw boom.notFound("Producto no encontrado");
    }
    this.products.splice(posicion, 1);
    return id;
  }
}

module.exports = ProductsService;
