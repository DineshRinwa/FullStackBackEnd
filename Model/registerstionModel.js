const mongoose = require("mongoose");

// Registerstion Schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "Email must be Unique"],
    required: [true, "Email must be Required"],
  },
  password: { type: String, required: [true, "Password must be required"] },
  role: {
    type: String,
    enum: ["admin", "seller", "buyer"],
    required: [true, "role must be required"],
  },
});

const User = mongoose.model("User", UserSchema); // Registerstion Model
module.exports = User;