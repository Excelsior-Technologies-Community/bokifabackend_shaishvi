const express = require("express");
const router = express.Router();

const {
  getUsers,
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

router.get("/users", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;