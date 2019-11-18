const express = require("express");
const router = express.Router();
const authHelper = require(__pathMiddleware + "auth");

module.exports = passport => {
  router.use("/auth", require("./auth")(passport));
  router.use("/users",
    (req, res, next) => {
      req.tableName = 'users';
      next();
    },
    authHelper.isAuthenticated,
    authHelper.isAuthenticatedAdmin,
  require("./users"));

  router.use("/roles",
    (req, res, next) => {
      req.tableName = 'roles';
      next();
    },
    authHelper.isAuthenticated,
    authHelper.isAuthenticatedAdmin,
  require("./roles"));

  router.use("/role-grants",
    (req, res, next) => {
      req.tableName = 'role_grants';
      next();
    },
    authHelper.isAuthenticated,
    authHelper.isAuthenticatedAdmin,
  require("./role_grants"));

  router.use("/user-grants",
    (req, res, next) => {
      req.tableName = 'user_grants';
      next();
    },
    authHelper.isAuthenticated,
    authHelper.isAuthenticatedAdmin,
  require("./user_grants"));

  router.use("/survey-folders",
    (req, res, next) => {
      req.tableName = 'survey_folders';
      next();
    },
    authHelper.isAuthenticated,
    authHelper.isAuthenticatedAdmin,
  require("./survey_folders"));

  router.use("/survey-forms",
    (req, res, next) => {
      req.tableName = 'survey_forms';
      next();
    },
    authHelper.isAuthenticated,
    authHelper.isAuthenticatedAdmin,
  require("./survey_forms"));

  router.use("/survey-collectors",
    (req, res, next) => {
      req.tableName = 'survey_collectors';
      next();
    },
    authHelper.isAuthenticated,
    authHelper.isAuthenticatedAdmin,
  require("./survey_collectors"));

  router.use("/survey-responses",
    (req, res, next) => {
      req.tableName = 'survey_responses';
      next();
    },
    authHelper.isAuthenticated,
    authHelper.isAuthenticatedAdmin,
  require("./survey_responses"));

  router.use("/survey-sends",
    (req, res, next) => {
      req.tableName = 'survey_sends';
      next();
    },
    authHelper.isAuthenticated,
    authHelper.isAuthenticatedAdmin,
  require("./survey_sends"));
  return router;
};
