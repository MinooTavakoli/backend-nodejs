const products = require("../data/products.json");
async function find() {
  return new Promise((res, rej) => {
    res(products);
  });
}

async function findById(id) {
  return new Promise((res, rej) => {
    res(products.find((product) => product?.id == id));
  });
}

async function create(product) {
  return new Promise((res, rej) => {
    products.push(product);
    res();
  });
}

const ProductModel = {
  find,
  findById,
  create,
};
module.exports = ProductModel;
