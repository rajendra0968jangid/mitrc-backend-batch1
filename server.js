const express = require("express");
const app = express();
const { dbConnect } = require("./config/dbConnect.js");

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
app.use(jsonParser);

require("dotenv").config();

const { userRouter } = require("./routes/user.route.js");

dbConnect();

const port = process.env.PORT || 3000;

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello Rajendra!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
