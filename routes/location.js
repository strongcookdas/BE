const express = require("express");
const {applyLocation, readLocations, readLocation} = require("../controller/location");
const router = express.Router();

router.get("/",readLocations)
router.post("/",applyLocation);
router.get("/:id",readLocation);

module.exports = router;