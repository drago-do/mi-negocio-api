const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    madeByUser: { type: String, require: true },
    userId: {type: mongoose.Schema.Types.ObjectId,
    ref: "users",},
    fullDeliver: { type: Boolean, required: true },
    paid: { type: Boolean, required: true },
    tableName: { type: String, required: true },
    location: { type: [String] },
    creationDate: { type: String },
    products: [],
    total: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
