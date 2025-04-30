const { userModel } = require("../models/user.model.js");

const createUser = async (req, res) => {
  //
  try {
    const { name, email, password, phone } = req.body;
    //console.log(name);
    //
    const newUser = new userModel({ name, email, password, phone });
    const userData = await newUser.save();
    res.json({message:"user created successfully",data:userData});
  } catch (error) {
    res.json({ message: error.message });
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
