const express = require("express");
const morgan = require("morgan");
const app = express();

// app.use(morgan("tiny"));
// app.use(morgan("dev"));
// app.use(morgan("combined"));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms ")
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.post("/body", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.put("/body", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.patch("/body", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("server run on post 3000");
});
