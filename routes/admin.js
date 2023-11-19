const express = require("express");
const router = express.Router();
const {createLocation, updateLocation} = require("../controller/admin");

router.post("/locations",createLocation);
router.put("/locations/:id",updateLocation);


module.exports = router;