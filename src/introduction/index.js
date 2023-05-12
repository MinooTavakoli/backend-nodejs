const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Welcome To Route ...");
  //   res.send("Hi Express JS");
  //   res.send("<h1>Hi Express JS</h1>");
  res.status(200).send({ message: "Hi Express JS" });
});

app.get("/users", function (req, res) {
  res.statusCode = 200;
  res.json({
    users: [
      {
        id: 1,
        name: "user_1",
      },
      {
        id: 2,
        name: "user_2",
      },
      {
        id: 3,
        name: "user_3",
      },
    ],
  });
});

app.get("/products", function (req, res) {
  res.statusCode = 200;
  res.json({
    products: [
      {
        id: 1,
        name: "product_1",
      },
      {
        id: 2,
        name: "product_2",
      },
      {
        id: 3,
        name: "product_3",
      },
    ],
  });
});

app.listen(3000, () => {
  console.log("server run on post 3000");
});
