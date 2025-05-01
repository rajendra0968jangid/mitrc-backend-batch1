const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const blogModel = mongoose.model("Blog", blogSchema);
module.exports = { blogModel };
