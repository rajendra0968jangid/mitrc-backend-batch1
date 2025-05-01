const jwt = require("jsonwebtoken");
const { response } = require("../utils/response.js");

const authMiddleWare = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return response(res, "Not Authorized Login", false, null, 400);
    }
    const tokenCode = jwt.verify(token, "secret code");
    req.body.userData = tokenCode.id;
    next();
  } catch (error) {
    return response(res, error.message, false, null, 500);
  }
};

module.exports = { authMiddleWare };
