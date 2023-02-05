const express = require("express");
const router = express.Router();
const BlogModel = require("../models/blogs.model");
const { render } = require("ejs");
const blogControll = require("../controllers/blog.controller");

// main page
router.get("/", blogControll.blogList);

// about page
router.get("/about", blogControll.aboutSection);

// create a new blog
router.post("/", (req, res) => {
  const blog = new BlogModel(req.body);

  blog
    .save()
    .then((data) => res.redirect("/blogs"))
    .catch((error) => console.log(error));
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// find a specific blog
router.get("/:id", blogControll.blogDetails);

// delete a blog
router.delete("/:id", blogControll.blogDelete);

// redirect
router.get("/about-us", (req, res) => {
  res.redirect("/about", {
    title: "About",
  });
});

router.get((req, res) => {
  res.status(404).render("404");
});

module.exports = router;
