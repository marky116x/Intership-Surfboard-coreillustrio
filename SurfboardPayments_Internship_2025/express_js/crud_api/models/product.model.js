const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
    },

    image: {
      type: String,
      required: false,
    },

  },

  { timestamps: true }


);

const Product = mongoose.model("Product", productSchema);

module.exports = Product
