"use strict";
const express = require("express");
const router = express.Router();
const surveyResponsesModel = require(__pathModels + "survey_responses");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;

router.get("/clear-responses-form/:surveyFormId", async (req, res, next) => {
  const surveyFormId = paramsHelper.getParam(req.params, "surveyFormId", "");
  if (!surveyFormId) {
    return res.status(400).json(new Response(true, 400, "error", "default.layout.PARAMETER_IS_MISSING"));
  }
  surveyResponsesModel.clearResponsesByForm({ surveyFormId }).then(_ => {
    res.json(new Response(false, 200, "success", "Success", []));
  }).catch(error => {
    return res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message));
  });
});

router.get("/clear-responses-collector/:surveyCollectorId", async (req, res, next) => {
  const surveyCollectorId = paramsHelper.getParam(req.params, "surveyCollectorId", "");
  if (!surveyCollectorId) {
    return res.status(400).json(new Response(true, 400, "error", "default.layout.PARAMETER_IS_MISSING"));
  }
  surveyResponsesModel.clearResponsesByCollector({ surveyCollectorId }).then(_ => {
    res.json(new Response(false, 200, "success", "Success", []));
  }).catch(error => {
    return res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message));
  });
});


module.exports = router;
