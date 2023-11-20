const express = require("express");
const {writeReview, updateReview, getReviews} = require("../controller/review");
const router = express.Router();

router.post("/:locationId",writeReview);
router.put("/:id",updateReview);
router.get("/",getReviews);

module.exports = router;