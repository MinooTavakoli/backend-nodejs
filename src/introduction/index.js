const express = require("express");
const app = express();

const users = [
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
];

const products = [
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
];

app.get("/", (req, res) => {
  console.log("Welcome To Route ...");
  //   res.send("Hi Express JS");
  //   res.send("<h1>Hi Express JS</h1>");
  res.status(200).send({ message: "Hi Express JS" });
});

app.get("/users", function (req, res) {
  res.statusCode = 200;
  res.json({
    users,
  });
});

app.get("/products", function (req, res) {
  res.statusCode = 200;
  res.json({
    products,
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  if (!user) {
    res.status(404).json({
      statusCode: res.statusCode,
      error: {
        message: "user not found",
      },
    });
  } else {
    res.status(200).json({
      statusCode: res.statusCode,
      data: {
        user,
      },
    });
  }
  res.json({
    users,
  });
});

app.listen(3000, () => {
  console.log("server run on post 3000");
});
