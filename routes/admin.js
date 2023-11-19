const express = require("express");
const router = express.Router();
const {createLocation, updateLocation, acceptAddLocation, rejectAddLocation} = require("../controller/admin");

router.post("/locations",createLocation);
router.put("/locations/:id",updateLocation);
router.put("/locations-add/:id",acceptAddLocation);
router.delete("/locations-add/:id",rejectAddLocation);

module.exports = router;