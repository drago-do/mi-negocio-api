const mongoose = require("mongoose");

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

module.exports = mongoose.model("daySales", daySalesSchema);
