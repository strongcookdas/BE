const express = require("express");
const router = express.Router();
const {createLocation} = require("../controller/admin");

router.post("/locations",createLocation);


module.exports = router;