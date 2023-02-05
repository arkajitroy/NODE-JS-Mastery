const fs = require("fs");

// const readStream = fs.createReadStream("./stream.txt");
const readStream = fs.createReadStream("./stream.txt", { encoding: "utf-8" });

// readable stream

readStream.on("data", (chunk) => {
  console.log("===== new chunk =====");
  //   console.log(chunk.toString());
  console.log(chunk);
});

// write stream

const writeStream = fs.createWriteStream("./streamWrite.txt");
readStream.on("data", (chunk) => {
  writeStream.write("\n ==== write stream ===== \n");
  writeStream.write(chunk);
});
