"use strict";
const express = require("express");
const router = express.Router();
const surveyCollectorsModel = require(__pathModels + "survey_collectors");
const surveyResponsesModel = require(__pathModels + "survey_responses");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;
const surveyFormsModel = require(__pathModels + "survey_forms");

router.post("/", async (req, res, next) => {
  const surveyResponse = req.body ? req.body : {};
  if (!surveyResponse) {
    return res
      .status(400)
      .json(
        new Response(true, 400, "error", "default.layout.NOT_HAVE_RESPONSE")
      );
  }
  const surveyCollector = await surveyCollectorsModel
    .getSurveyCollectorsById(surveyResponse.surveyCollectorId)
    .catch(error => {
      return res
        .status(error.statusCode || 400)
        .json(new Response(true, 400, "error", error.message));
    });
  if (!surveyCollector) {
    return res
      .status(400)
      .json(
        new Response(true, 400, "error", "default.layout.COLLECTOR_NOT_EXIST")
      );
  }
  if (surveyCollector.status === "CLOSED") {
    return res
      .status(400)
      .json(new Response(true, 400, "error", "default.layout.HAVE_BEEN_CLOSE"));
  }
  if (surveyCollector.passwordEnabled) {
    if (surveyResponse.collectorPassword !== surveyCollector.password) {
      return res
        .status(400)
        .json(
          new Response(true, 400, "error", "default.layout.INCORRECT_PASSWORD")
        );
    }
  }
  if (!surveyCollector.allowMultipleResponses) {
    const ipResponse = await surveyResponsesModel
      .getSurveyResponsesByIpAddress(surveyResponse.ipAddress)
      .catch(error => {
        return res
          .status(error.statusCode || 400)
          .json(new Response(true, 400, "error", error.message));
      });
    if (ipResponse) {
      return res
        .status(400)
        .json(
          new Response(
            true,
            400,
            "error",
            "default.layout.HAVE_ALREADY_SUBMIT_RESPONSE"
          )
        );
    }
  }
  const saceSurveyResponse = await surveyResponsesModel
    .saveSurveyResponse(surveyResponse, null, { task: "create" })
    .catch(error => {
      return res
        .status(error.statusCode || 400)
        .json(new Response(true, 400, "error", error.message));
    });
  let actionClose = false;
  if (surveyCollector.closeDateEnabled && surveyCollector.closeDate) {
    if (new Date(surveyCollector.closeDate).getTime() <= new Date().getTime()) {
      actionClose = true;
    }
  }
  if (surveyCollector.responseLimitEnabled && surveyCollector.responseLimit) {
    // count response
    const params = {
      surveyFormId: surveyResponse.surveyFormId,
      surveyCollectorId: surveyResponse.surveyCollectorId
    };
    const totalResponse = await surveyResponsesModel.countSurveyResponsesByFormAndCollector(
      params
    );
    if (totalResponse >= surveyCollector.responseLimit) {
      actionClose = true;
    }
  }
  if (actionClose) {
    const collectorUpDate = {
      status: "CLOSED"
    };
    await surveyCollectorsModel
      .saveSurveyCollector(collectorUpDate, surveyResponse.surveyCollectorId, {
        task: "update"
      })
      .catch(error => {
        return res
          .status(error.statusCode || 400)
          .json(new Response(true, 400, "error", error.message));
      });
  }
  return res
    .status(200)
    .json(new Response(false, 200, "success", "Success", [saceSurveyResponse]));
});

module.exports = router;
