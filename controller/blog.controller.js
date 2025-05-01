const { blogModel } = require("../models/blog.model.js");
const { response } = require("../utils/response.js");
const createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newBlog = new blogModel({
      title,
      description,
      author: req.body.userData,
      image: req.file.filename,
    });
    const blogData = await newBlog.save();
    return response(res, "Blog created successfully", true, blogData);
  } catch (error) {
    return response(res, error.message, false, null, 500);
  }
};
const getBlogById = async (req, res) => {
  try {
  } catch (error) {}
};
const getAllBlog = async (req, res) => {
  try {
    const allBlog = await blogModel.find();
    return response(res, "All Blogs get successfully", true, allBlog);
  } catch (error) {
    return response(res, error.message, false, null, 500);
  }
};

module.exports = { createBlog, getAllBlog, getBlogById };
