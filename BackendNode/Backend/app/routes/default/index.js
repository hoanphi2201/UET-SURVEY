const express = require("express");
const router = express.Router();
const authHelper = require(__pathMiddleware + "auth");

router.use(
  "/survey-forms",
  authHelper.isAuthenticated,
  require("./survey_forms")
);
router.use(
  "/survey-folders",
  authHelper.isAuthenticated,
  require("./survey_folders")
);
router.use(
  "/survey-collectors",
  authHelper.isAuthenticated,
  require("./survey_collectors")
);
router.use("/users", authHelper.isAuthenticated, require("./users"));
router.use("/cities", authHelper.isAuthenticated, require("./cities"));
router.use("/survey-responses", require("./survey_responses"));
module.exports = router;
