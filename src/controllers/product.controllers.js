const ProductModel = require("../model/product.model");

async function get(req, res) {
  try {
    const products = await ProductModel.find();
    res.writeHead(200, { "Conten-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log(error);
  }
}

async function create(req, res) {
  try {
    await ProductModel.create({
      id: Date.now(),
      name: "Ice Cream",
      description: "descriptionproduct",
      price: "27000$",
    });
    res.writeHead(201, { "Conten-Type": "application/json" });
    res.write(
      JSON.stringify({
        message: "product created successfully",
      })
    );
    res.end();
  } catch (error) {
    console.log(error);
  }
}

async function getById(req, res) {
  try {
    // const [, , , id] = req?.url.split("/");
    const id = req?.url.split("/")[3];
    const product = await ProductModel.findById(id);
    if (!product) {
      res.writeHead(404, { "Conten-Type": "application/json" });
      res.write(JSON.stringify({ message: "Not Found Any Product" }));
      res.end();
    } else {
      res.writeHead(200, { "Conten-Type": "application/json" });
      res.write(JSON.stringify(product));
      res.end();
    }
  } catch (error) {
    console.log(error);
  }
}

const ProductsController = {
  get,
  getById,
  create,
};

module.exports = ProductsController;
