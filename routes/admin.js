const express = require("express");
const router = express.Router();
const {createLocation, updateLocation, acceptAddLocation} = require("../controller/admin");

router.post("/locations",createLocation);
router.put("/locations/:id",updateLocation);
router.put("/locations-add/:id",acceptAddLocation);

module.exports = router;