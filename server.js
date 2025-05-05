const express = require("express");
const app = express();
const { dbConnect } = require("./config/dbConnect.js");

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
app.use(jsonParser);

const cors = require("cors");
app.use(cors());

require("dotenv").config();

const { userRouter } = require("./routes/user.route.js");
const { blogRouter } = require("./routes/blog.route.js");

dbConnect();

const port = process.env.PORT || 3000;
app.use("/image",express.static("uploads"));
app.use("/user", userRouter);
app.use("/blog",blogRouter);

app.get("/", (req, res) => {
  res.send("Hello Rajendra!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
