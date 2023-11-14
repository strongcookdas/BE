const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/signup", authController.createUser);
router.post("/signin", authController.loginUser);
router.post("/signout", authController.logoutUser);

module.exports = router;
