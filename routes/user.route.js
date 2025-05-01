const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  getUserAll,
  getUserById,
  userDeleteById,
  userUpdateById,
  loginUser
} = require("../controller/user.controller");

userRouter.get("/get-user-all", getUserAll);
userRouter.get("/get-user-byid/:id", getUserById);
userRouter.post("/create-user", createUser);
userRouter.post("/login-user", loginUser);
userRouter.put("/update-user/:id", userUpdateById);
userRouter.delete("/delete-user/:id", userDeleteById);

module.exports = { userRouter };
