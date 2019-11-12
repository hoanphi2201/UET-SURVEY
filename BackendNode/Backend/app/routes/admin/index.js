const express = require("express");
const router = express.Router();
const authHelper = require(__pathMiddleware + "auth");

module.exports = passport => {
  router.use("/auth", require("./auth")(passport));
  router.use("/users", authHelper.isAuthenticated, require("./users"));
  router.use("/roles", authHelper.isAuthenticated, require("./roles"));
  router.use(
    "/role-grants",
    authHelper.isAuthenticated,
    require("./role_grants")
  );
  router.use(
    "/user-grants",
    authHelper.isAuthenticated,
    require("./user_grants")
  );
  router.use(
    "/survey-folders",
    authHelper.isAuthenticated,
    require("./survey_folders")
  );
  router.use(
    "/survey-forms",
    authHelper.isAuthenticated,
    require("./survey_forms")
  );
  return router;
};
