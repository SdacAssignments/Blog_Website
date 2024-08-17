const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

// Index Route - Show all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.render("index", { blogs });
  } catch (err) {
    console.log(err);
  }
});

// New Route - Show form to create new blog
router.get("/new", (req, res) => {
  res.render("new");
});

// Create Route - Add new blog to DB
router.post("/", async (req, res) => {
  try {
    await Blog.create(req.body.blog);
    res.redirect("/blogs");
  } catch (err) {
    console.log(err);
  }
});

// Show Route - Show more info about one blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.render("show", { blog });
  } catch (err) {
    console.log(err);
  }
});

// Edit Route - Show form to edit an existing blog
router.get("/:id/edit", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.render("edit", { blog });
  } catch (err) {
    console.log(err);
  }
});

// Update Route - Update a particular blog in the DB
router.put("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, req.body.blog);
    res.redirect(`/blogs/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
});

// Delete Route - Delete a particular blog from DB
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect("/blogs");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
