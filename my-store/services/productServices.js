const faker = require('faker');
const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');

class ProductServices {

  constructor(){
    this.products =[];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id:faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      });

    }
  }
  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }


  async find() {
    const query = 'SELECT * FROM task';
    const [data] = await sequelize.query(query);
    return data;
  }


  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if(!product) {
      throw boom.notFound('product not found');
    }
    if(product.isBlock){
      throw boom.conflict('product not block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('Product not found');
    }
    const products = this.products[index];
    this.products[index] = {
      ...products,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductServices;
