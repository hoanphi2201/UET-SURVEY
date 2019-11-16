"use strict";
const express = require("express");
const router = express.Router();
const surveyCollectorsModel = require(__pathModels + "survey_collectors");
const surveyResponsesModel = require(__pathModels + "survey_responses");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;

router.get("/count-all-responses-typical-time-spent", async (req, res, next) => {
  const { user } = req;
  const totalResponse = await surveyResponsesModel.countAllSurveyResponses({}, {user}).catch(error => {
    return res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message));
  });
  
  const totalResponseComplete = await surveyResponsesModel.countAllSurveyResponses({ json: { $ne: null }}, {user}).catch(error => {
    return res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message));
  });
  
  const typicalTimeSpent = await surveyResponsesModel.countTypicalTimeSpent({}, { user })

  return res.json(new Response(false, 200, "success", "Success", [{ totalResponse, typicalTimeSpent, totalResponseComplete }]));
}
);

router.get("/clear-responses/:surveyCollectorId", async (req, res, next) => {
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

router.get("/analyze-results/:surveyFormId", async (req, res, next) => {
  const surveyFormId = paramsHelper.getParam(req.params, "surveyFormId", "");
  if (!surveyFormId) {
    return res.status(400).json(new Response(true, 400, "error", "default.layout.PARAMETER_IS_MISSING"));
  }
  surveyResponsesModel.getResponsesBySurveyForm({ surveyFormId }).then(surveyResponses => {
    res.json(new Response(false, 200, "success", "Success", surveyResponses));
  }).catch(error => {
    return res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message));
  });
});

module.exports = router;
