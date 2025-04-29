const { userModel } = require("../models/user.model.js");

const createUser = async (req, res) => {
  res.send("create user");
};
const getUserAll = async (req, res) => {
  res.send("get user all");
};
const getUserById = async (req, res) => {
  res.send("get user by id");
};
const userDeleteById = async (req, res) => {
  res.send("user delete by id");
};
const userUpdateById = async (req, res) => {
  res.send("user update by id");
};

module.exports = {
  createUser,
  getUserAll,
  getUserById,
  userDeleteById,
  userUpdateById,
};
