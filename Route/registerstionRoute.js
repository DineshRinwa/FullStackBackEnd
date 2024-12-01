const express = require("express");
const User = require("../Model/registerstionModel");
const router = express.Router();
const Secret_Key = process.env.SECRET_KEY;

const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

// Handle Error Funcation
const handleError = (res, error, status = 400) =>
  res.status(status).json({ error: error.message || error });

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const passwordHash = await bcrypt.hash(password, saltRounds); // Hash Password

    const user = User({
      email,
      password: passwordHash,
      role,
    });

    await user.save();
    res.status(200).json({ message: "User SignUp Successfully...", user});
  } catch (error) {
    handleError(res, error);
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({email}); // find user
    if(!user) return handleError(res, "User Not Found", 404);
    const compareHashPassword = await bcrypt.compare(password, user.password); // Check Password

    // If password wrong
    if (!compareHashPassword)
      return handleError(res, "Password is Invaild", 404);

    const token = jwt.sign({ userId: user._id, role: user.role }, Secret_Key); // Genreate token
    res.status(200).json({ message: "User Login Successfully", token });
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router;