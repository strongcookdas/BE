const express = require("express");
const {writeReview} = require("../controller/review");
const router = express.Router();

router.post("/:locationId",writeReview);

module.exports = router;