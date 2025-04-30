const { userModel } = require("../models/user.model.js");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  //
  try {
    //body se value get karne k liye
    let { name, email, password, phone } = req.body;
    //hashed your password
    let salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    //db mai user create karni ki query hai
    const newUser = new userModel({ name, email, password, phone });
    const userData = await newUser.save();
    res.status(200).json({ message: "user created successfully", data: userData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
