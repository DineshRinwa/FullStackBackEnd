const mongoose = require("mongoose");

// Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, "Product Name must be unique"],
    required: [true, "Product Name must be required"],
  },

  price: {
    type: Number,
    min: [1, "Price must be Positive"],
    required: [true, "Product Price must be required"],
  },
  quantity: {
    type: Number,
    min: [1, "Quantity must be Positive"],
    required: [true, "Product Quantity must be required"],
  },
  description: {
    type: String,
    required: [true, "Product Description must be required"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema); // Product Model
module.exports = Product;
