const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  size: { type: String },
  ingredients: { type: [String] },
  price: { type: Number, required: true },
  image: { type: String, Buffer, default: "none" },
  units: { type: Number, require: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
});

module.exports = mongoose.model("product", productSchema);
