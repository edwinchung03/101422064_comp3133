const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.validate(); // Ensures validation before saving
    await user.save();
    res.status(201).json({ message: "User created successfully!", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
