const { userModel } = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const { response } = require("../utils/response.js");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, "secret code", { expiresIn: '7d' });
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await userModel.findOne({ email });
    if (!userData) {
      return response(res, "User doesn't exist", false);
    }
    const isMatch = await bcrypt.compare(password, userData.password);

    if (!isMatch) {
      return response(res, "Invalid email and password", false);
    }
    const token = createToken(userData._id);
    let obj = { userData, token };
    return response(res, "User login successfully", true, obj);
  } catch (error) {
    return response(res, error.message, false, null, 500);
  }
};

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

    return response(res, "user created successfully", true, userData);
  } catch (error) {
    return response(res, error.message, false, null, 500);
  }
};
const getUserAll = async (req, res) => {
  try {
    let userData = await userModel.find();
    res
      .status(200)
      .json({ message: "All User data get successfully", data: userData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    let userId = req.params.id;
    console.log(userId);
    //
    let userData = await userModel.findById(userId);
    res
      .status(200)
      .json({ message: "user data get successfully", data: userData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const userDeleteById = async (req, res) => {
  res.send("user delete by id");
};
const userUpdateById = async (req, res) => {
  res.send("user update by id");
};

module.exports = {
  loginUser,
  createUser,
  getUserAll,
  getUserById,
  userDeleteById,
  userUpdateById,
};
