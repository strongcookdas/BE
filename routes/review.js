const express = require("express");
const {writeReview, updateReview, getReviews, getReviewsByLocation} = require("../controller/review");
const router = express.Router();

router.post("/:locationId",writeReview);
router.put("/:id",updateReview);
router.get("/:locationId",getReviewsByLocation)
router.get("/",getReviews);

module.exports = router;