const mongoose = require("mongoose");
let dbConnect = async () => {
  await mongoose
    .connect("mongodb://rajendra0968jangid:TgTef6Y1rbOQeZsb@cluster0-shard-00-00.wyu84.mongodb.net:27017,cluster0-shard-00-01.wyu84.mongodb.net:27017,cluster0-shard-00-02.wyu84.mongodb.net:27017/mytestingfood?ssl=true&replicaSet=atlas-dolp18-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("connected"))
    .catch(() => console.log("error"));
};

module.exports = { dbConnect };
