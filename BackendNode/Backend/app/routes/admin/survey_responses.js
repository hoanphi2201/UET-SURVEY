"use strict";
const express = require("express");
const router = express.Router();
const surveyResponsesModel = require(__pathModels + "survey_responses");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;

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

router.get("/", async (req, res, next) => {
  const params = {
    paging: {
      total: 0,
      pageSize: parseInt(paramsHelper.getParam(req.query, "pageSize", 10)),
      page: parseInt(paramsHelper.getParam(req.query, "page", 1))
    },
    searchValue: paramsHelper.getParam(req.query, "searchValue", ""),
    searchKey: paramsHelper.getParam(req.query, "searchKey", ""),
    sortField: paramsHelper.getParam(req.query, "sortField", "id"),
    sortType: paramsHelper.getParam(req.query, "sortType", "asc")
  };
  params.paging.total = await surveyResponsesModel.countSurveyResponses(params, {page: 'admin'}).catch(error => res.status(error.statusCode || 400).json(error));
  await surveyResponsesModel.listSurveyResponses(params, {page: 'admin'}).then(surveyResponses => {
    res.status(200).json(
      new ResponsePaging(false, 200, "success", "Success", surveyResponses, params.paging));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/:surveyResponseId", async (req, res, next) => {
  const surveyResponseId = paramsHelper.getParam(req.params, "surveyResponseId", "");
  await surveyResponsesModel.getSurveyResponsesById(surveyResponseId).then(surveyResponse => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyResponse]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/delete-multy", (req, res, next) => {
  const surveyResponseIds = paramsHelper.getParam(req.body, "surveyResponseIds", "");
  if (!Array.isArray(surveyResponseIds)) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.IS_ARRAY"));
  }
  surveyResponsesModel.deleteSurveyResponses(surveyResponseIds, { task: "delete-many" }).then(surveyResponses => {
    res.status(200).json(new Response(false, 200, "success", "Success", surveyResponses));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/:surveyResponseId", (req, res, next) => {
  const surveyResponseId = paramsHelper.getParam(req.params, "surveyResponseId", "");
  surveyResponsesModel.deleteSurveyResponses(surveyResponseId, { task: "delete-one" }).then(surveyResponse => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyResponse]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/:surveyResponseId", (req, res, next) => {
  const surveyResponseId = paramsHelper.getParam(req.params, "surveyResponseId", "");
  const surveyResponse = req.body ? req.body : {};
  surveyResponsesModel.saveSurveyResponse(surveyResponse, surveyResponseId, { task: "update" }).then(surveyResponse => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyResponse]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/", (req, res, next) => {
  const surveyResponse = req.body ? req.body : {};
  surveyResponsesModel.saveSurveyResponse(surveyResponse, null, { task: "create" }).then(surveyResponse => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyResponse]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});


module.exports = router;
