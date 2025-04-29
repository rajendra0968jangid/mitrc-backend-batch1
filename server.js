const express = require("express");
const app = express();
const { dbConnect } = require("./config/dbConnect.js");
require("dotenv").config();

dbConnect();


const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Rajendra!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
