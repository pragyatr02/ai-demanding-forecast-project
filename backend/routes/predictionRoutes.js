const express = require("express");
const router = express.Router();

const {
    predictDemand
} = require("../controllers/predictionController");

router.get("/", predictDemand);

module.exports = router;