const express = require("express");
const router = express.Router();

router.use("/survey-collectors", require("./survey_collectors"));
router.use("/survey-responses", require("./survey_responses"));

module.exports = router;
