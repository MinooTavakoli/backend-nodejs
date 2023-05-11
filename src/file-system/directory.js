const fs = require("fs");
const folderAccess = "new-dir";
const checkExists = fs.existsSync(folderAccess);

// if (checkExists) {
//   console.log("this folder already exist!");
// } else {
//   fs.mkdir(folderAccess, { recursive: true }, (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// }

fs.mkdir(folderAccess, { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }
});

fs.mkdirSync("new-dir2", { recursive: true });
//...........................................

fs.readdir("./", (err, files) => {
  console.log(files);
});
