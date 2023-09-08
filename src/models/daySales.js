const mongoose = require("mongoose");

const daySalesSchema = mongoose.Schema(
  {
    dateTime: {
      type: Date,
      required: true,
      default: new Date(),
    },
    dayName: { type: String },
    daySale: { type: [Object] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("daySales", daySalesSchema);
