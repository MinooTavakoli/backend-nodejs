const fs = require("fs");

fs.readFile("file.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

const readSync = fs.readFileSync("file.txt", "utf-8");
console.log(readSync);
