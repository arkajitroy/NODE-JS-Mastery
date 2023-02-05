const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogsModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    blogContent: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BlogModel = mongoose.model("blogs", blogsModel);
module.exports = BlogModel;
