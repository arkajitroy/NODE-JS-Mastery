const express = require("express");
const app = express(); // express app

// register view engine
app.set("view engine", "ejs");

const PORT = 5000;

const blogBody =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem praesentium natus? Perferendis dignissimos ipsum non, a id architecto sed! Facere quo corrupti a, non repellendus adipisci voluptates debitis impedit";

// routes
// render will automatically, finds the file in the view dir
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Best Smartphone of 2023",
      author: "Richard",
      blogBody: `${blogBody}`,
    },
    {
      title: "How to become Fast Typer",
      author: "Joe",
      blogBody: `${blogBody}`,
    },
    {
      title: "Learn NodeJS in 30 Days",
      author: "Jake",
      blogBody: `${blogBody}`,
    },
    {
      title: "What is FullStack Developer",
      author: "Vinie",
      blogBody: `${blogBody}`,
    },
  ];
  res.render("home", {
    title: "Home",
    blogs,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.get("/create-blogs", (req, res) => {
  res.render("create", {
    title: "Create",
  });
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about", {
    title: "About",
  });
});

app.get((req, res) => {
  res.status(404).render("404");
});

// listening for request
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
