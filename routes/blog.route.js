const express = require("express");
const blogRouter = express.Router();
const { authMiddleWare } = require("../middleware/auth.js");
const {
  createBlog,
  getAllBlog,
  getBlogById,
} = require("../controller/blog.controller.js");

blogRouter.post("/create-blog", authMiddleWare, createBlog);
blogRouter.get("/get-blog-byid/:id",getBlogById);
blogRouter.get("/get-all-blog",getAllBlog);

module.exports = { blogRouter };
