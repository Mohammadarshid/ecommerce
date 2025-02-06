const mongoose = require("mongoose");

const ProductShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a product name"],
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
      min: [0, "Price must be a positive number"],
    },
    // Images: [{ src: { type: String, required: true } }],
    // dateAdded: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("productscat", ProductShema);
