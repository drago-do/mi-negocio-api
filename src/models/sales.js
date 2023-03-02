const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    id_db: { type: mongoose.Schema.Types.Mixed, required: true },
    name: { type: String },
    price: { type: Number },
    units: { type: Number },
  },
  {
    timestamps: true,
  }
);

const orderSchema = mongoose.Schema(
  {
    id_timestamp: { type: mongoose.Schema.Types.Mixed, required: true },
    name: { type: String },
    items: { type: [itemSchema], default: [] },
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
    activeDay: { type: Boolean, require: true },
  },
  {
    timestamps: true,
  }
);

const ItemOrder = mongoose.model("itemOrder", itemSchema);
const Order = mongoose.model("order", orderSchema);
const DaySales = mongoose.model("daySales", daySalesSchema);

module.exports = { ItemOrder, Order, DaySales };
