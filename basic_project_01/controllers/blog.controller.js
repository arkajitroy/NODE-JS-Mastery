// blogIndex, blogDetails, getBlogCreate, postBlogCreate, deleteBlog

const BlogModel = require("../models/blogs.model");

const blogList = (req, res) => {
  BlogModel.find()
    .sort({ createdAt: -1 }) // descending : latest will be first
    .then((data) =>
      res.render("home", {
        title: "Home",
        blogs: data,
      })
    )
    .catch((err) => console.log(err.message));
};

const blogDetails = (req, res) => {
  const blogID = req.params.id;
  BlogModel.findById(blogID)
    .then((result) =>
      res.render("details", { blog: result, title: "Blog Detail" })
    )
    .catch((error) => console.log(error.message));
};

const aboutSection = (req, res) => {
  res.render("about", {
    title: "About",
  });
};

const blogDelete = (req, res) => {
  const _id = req.params.id;
  BlogModel.findByIdAndDelete(_id)
    .then((result) => res.json({ redirect: "/blogs" }))
    .catch((error) => error.message);
};

module.exports = {
  blogList,
  blogDetails,
  aboutSection,
  blogDelete,
};
