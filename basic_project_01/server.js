const express = require("express");
const app = express(); // express app
const morgan = require("morgan");
const mongoose = require("mongoose");
const Routes = require("./routes/blog.routes");

const PORT = 5000;
const dbPORT = "mongodb://127.0.0.1:27017/Blogs";

// static files
app.use(express.static("public"));
// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded());

// register view engine
app.set("view engine", "ejs");

// database connection
mongoose.set("strictQuery", false);
mongoose
  .connect(dbPORT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Connected to Database"))
  .catch((error) => console.log(error.message));

// redirect home page to blogs route
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// routes
app.use("/blogs", Routes);

// listening for request
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
