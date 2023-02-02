const fs = require("fs");

// read files

// reading files : fs.readFile takes two argument (filepath, callback function)
// this is a async function so, it takes some few times to execute
fs.readFile("./blogs.txt", (err, data) => {
  if (err) {
    console.log(err.message);
  }
  console.log(data); // this will return a buffer
  console.log("Data => ", data.toString());
});

// writting files
fs.writeFile("./blogs.txt", "updated text using writeFIle", () => {
  console.log("File is updated!");
});
// now here if the file doesn't exist, which we have given
// this will automatically creates a file for us
fs.writeFile("./blogs2.txt", "New text file created using writeFIle", () => {
  console.log("A new file has been created");
});

// directories

fs.mkdir("./assets", (err) => {
  if (err) console.log(err.message);
  console.log("Assets folder has been created"); // if you run this another time it will throw an error
});

// now this will check wheather the file we are creating, it exists or not
// if it doesn't exist then it will not run the code
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) console.log(err.message);
    console.log("Assets folder has been created"); // if you run this another time it will throw an error
  });
} else {
  fs.rmdir("./assets", (err) => {
    // if file exist then it will delete the file
    if (err) console.log(err.message);
    console.log("Folder has been deleted");
  });
}

// delete files -- firest create a file before running this
// file name : delete.txt

if (fs.existsSync("./delete.txt")) {
  fs.unlink("./delete.txt", () => {
    if (err) console.log(err.message);
    console.log("File has been deleted");
  });
}
