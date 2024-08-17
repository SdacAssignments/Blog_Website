const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const blogController = require("./controllers/blogController");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost/blog_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Routes
app.use("/blogs", blogController);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
