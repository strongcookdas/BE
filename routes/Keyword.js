const express = require("express");
const {createKeyword} = require("../controller/Keyword");
const router = express.Router();

router.post("/",createKeyword);

module.exports = router;