const express = require("express");
const {applyLocation, readLocations} = require("../controller/location");
const router = express.Router();

router.get("/",readLocations)
router.post("/",applyLocation);

module.exports = router;