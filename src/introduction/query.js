const express = require("express");
const queryString = require("querystring");
const app = express();
const posts = require("./posts.json");

app.get("/foo", (req, res) => {
  console.log(queryString.parse("key=value&key2=value2&key3=value3"));
  console.log(
    queryString.stringify({
      key: "value",
      key2: "value2",
      key3: "value3",
    })
  );
  const { key, key3, key2 } = req.query;
  res.send({ key, key3, key2, url: req.originalUrl });
  res.status(200).send("Accepted: " + req.url);
});

app.get("/blogs", (req, res) => {
  const { title, desc } = req.query;
  const regexTitle = new RegExp(title ?? "", "gi");
  const regexDesc = new RegExp(desc ?? "", "gi");
  const filterData = posts.filter(
    (post) => post.title.match(regexTitle) || post.body.match(regexDesc)
  );
  res.send({ posts: filterData });
});

app.listen(3000, () => {
  console.log("server run on post 3000");
});
