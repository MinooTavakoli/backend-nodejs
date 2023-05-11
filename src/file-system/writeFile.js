const fs = require("fs");
const data = "created\n";
fs.writeFile("write.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("write in file DONE!");
  }
});

fs.writeFileSync("write.txt", "test SYNC Write!");
