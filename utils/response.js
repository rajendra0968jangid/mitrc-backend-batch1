let response = (res, message, success, data = null, status = 200) => {
  const responseData = {
    success,
    message,
  };
  if (data != null) {
    responseData.data = data;
  }
  return res.status(status).json(responseData);
};

module.exports = { response };
