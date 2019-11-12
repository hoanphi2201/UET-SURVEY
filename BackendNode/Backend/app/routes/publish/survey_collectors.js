"use strict";
const express = require("express");
const router = express.Router();
const surveyCollectorsModel = require(__pathModels + "survey_collectors");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;
const generateLink = require(__pathHelper + "generate_link");
const surveyFormsModel = require(__pathModels + "survey_forms");

router.get("/:url", async (req, res, next) => {
  const url = paramsHelper.getParam(req.params, "url", "");
  surveyCollectorsModel
    .getSurveyCollectorsByUrl(url)
    .then(surveyCollector => {
      res
        .status(200)
        .json(
          new Response(false, 200, "success", "Success", [surveyCollector])
        );
    })
    .catch(error =>
      res
        .status(error.statusCode || 400)
        .json(new Response(true, 400, "error", error.message))
    );
});

router.post("/compare-password", async (req, res, next) => {
  const params = req.body ? req.body : {};
  surveyCollectorsModel
    .compareSurveyCollectorPassword(params)
    .then(surveyCollector => {
      res
        .status(200)
        .json(
          new Response(false, 200, "success", "Success", [surveyCollector])
        );
    })
    .catch(error =>
      res
        .status(error.statusCode || 400)
        .json(new Response(true, 400, "error", error.message))
    );
});
module.exports = router;
