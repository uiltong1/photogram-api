const express = require("express");
const router = express.Router();

// Middlewares
const validate = require("../middleware/handleValidation");
const {
  userCreateValidation,
  loginValidation,
} = require("../middleware/userValidations");

const {
  register,
  login,
  getCurrentUser,
} = require("../controllers/UserController");
const authGuard = require("../middleware/authGuard");

router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);

module.exports = router;
