const http = require("http");
const fs = require("fs");
const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log("request url", req.url);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  // routing
  let path = "./views/"; // main dir
  switch (req.url) {
    case "/":
      path += "home.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // sending an html file while request
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err.message);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, "localhost", () => {
  console.log(`Listening on the port ${PORT}`);
});
