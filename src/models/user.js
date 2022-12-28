const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
  },
  username: { type: String, require: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  avatar: { type: String, require: true },
  creationDate: { type: Date, default: Date.now },
  age: { type: Number },
});

module.exports = mongoose.model("user", userSchema);
