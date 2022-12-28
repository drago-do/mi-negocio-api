const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  image: { type: String, Buffer, default: "none" },
  parent: { type: mongoose.Schema.Types.Mixed },
});
module.exports = mongoose.model("category", categorySchema);
