const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  newpassword: String,
  confirmpassword: String,
});

module.exports = mongoose.model("users", userSchema);
