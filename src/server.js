const http = require("http");
const ErrorHandler = require("./controllers/errorHandler.controller");
const ProductsController = require("./controllers/product.controllers");
const PORT = "3000";
const server = http.createServer((req, res) => {
  if (req?.url === "/api/products" && req.method == "GET") {
    ProductsController.get(req, res);
  } else if (
    req?.url?.match(/\/api\/products\/[0-9]+/) &&
    req.method == "GET"
  ) {
    ProductsController.getById(req, res);
  } else if (req?.url === "/api/products" && req.method == "POST") {
    ProductsController.create(req, res);
  } else {
    ErrorHandler.notFound(res);
  }
});

server.listen(PORT);

console.log(`run server on port ${PORT} http://localhost:${PORT}`);
