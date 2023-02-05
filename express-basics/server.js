const express = require("express");
const app = express(); // express app

const PORT = 5000;

// routes
app.get("/", (req, res) => {
  //   res.send("<p>Welcome to home<p>");
  res.sendFile("./views/home.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page -- app.use is for using the middlewares
// if the app doesn' find any match according the routes
// it will automatically redirects you to 404 page
app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});
// this is similar but it tracks the status code
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

// listening for request
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
