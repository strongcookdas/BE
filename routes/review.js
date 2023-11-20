const express = require("express");
const {writeReview, updateReview} = require("../controller/review");
const router = express.Router();

router.post("/:locationId",writeReview);
router.put("/:id",updateReview);

module.exports = router;