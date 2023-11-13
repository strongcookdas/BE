const express = require("express");
const {applyLocation} = require("../controller/location");
const router = express.Router();

router.post("/",applyLocation);

module.exports = router;