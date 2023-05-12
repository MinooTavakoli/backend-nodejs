const express = require("express");
const app = express();

app.get("/file.txt", (req, res) => {
  res.status(200).send("Accepted: " + req.url);
});

app.get("/ab?cd", (req, res) => {
  //acd, abcd
  res.status(200).send("Accepted: " + req.url + " ab?cd");
});

app.get("/ab+cd", (req, res) => {
  // abcd,abbcd, abbbb(*n)cd
  res.status(200).send("Accepted: " + req.url + " ab+cd");
});

app.get("/ab*cd", (req, res) => {
  //ab(alphabet-numeric)cd => abnjvjf446nv*6jdnjfnjffjcd, abcd
  res.status(200).send("Accepted: " + req.url + " ab*cd");
});

app.get("/ab(cd)?e", (req, res) => {
  // abe, abcde
  res.status(200).send("Accepted: " + req.url + " ab(cd)?e");
});

app.get(/[a-z0-9_\.]{5,50}@[a-z]{2,6}\.[a-z]{2,10}/gi, (req, res) => {
  // abe, abcde
  res
    .status(200)
    .send(
      "Accepted: " + req.url + "  /[a-z0-9_.]{5,50}@[a-z]{2,6}.[a-z]{2,10}/"
    );
});

app.get(/.*nodejs$/, (req, res) => {
  // abe, abcde
  res.status(200).send("Accepted: " + req.url + "  /.*nodejs$/");
});

app.listen(3000, () => {
  console.log("server run on post 3000");
});
