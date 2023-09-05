const mongoose = require("mongoose");

const daySalesSchema = mongoose.Schema(
  {
    dateTime: {
      type: Date,
      required: true,
    },
    dayName: { type: String, required: true },
    daySale: { type: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("daySales", daySalesSchema);
