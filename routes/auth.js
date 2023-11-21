const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const {
	checkNotAuthenticated,
	checkAuthenticated,
} = require("../middleware/authMiddleware");

router.post("/signup", checkNotAuthenticated, authController.createUser);
router.post("/signin", checkNotAuthenticated, authController.loginUser);
router.post("/signout", checkAuthenticated, authController.logoutUser);

module.exports = router;
