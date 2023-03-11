const mongoose = require("mongoose");

const itemOrderSchema = mongoose.Schema({
  creationDate: { type: Number, required: true },
  id_mongo: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
  price: { type: Number, required: true },
  deliver: { type: Boolean },
});

const orderSchema = mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    fullDeliver: { type: Boolean, required: true },
    paid: { type: Boolean, required: true },
    tableName: { type: String, required: true },
    location: { type: [String] },
    creationDate: { type: String },
    products: [itemOrderSchema],
    total: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const daySalesSchema = mongoose.Schema(
  {
    dateTime: {
      type: Date,
      required: true,
      unique: true,
      index: true,
    },
    dayName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ItemOrder = mongoose.model("itemOrder", itemOrderSchema);
const Order = mongoose.model("order", orderSchema);
const DaySales = mongoose.model("daySales", daySalesSchema);

module.exports = { ItemOrder, Order, DaySales };
