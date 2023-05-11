const fs = require("fs");
fs.appendFile("write.txt", "new data appended", "utf8", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.appendFileSync("write.txt", "\nnew data appended sync", "utf8");

const checkExist = fs.existsSync("file.txt");
if (checkExist) {
  fs.unlink("file.txt", (err) => {
    if (err) {
      console.log(err);
    }
  });
  //   fs.unlinkSync("file.txt")
} else {
  console.log("not found file!!");
}
