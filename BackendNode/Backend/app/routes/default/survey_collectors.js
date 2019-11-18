"use strict";
const express = require("express");
const router = express.Router();
const surveyCollectorsModel = require(__pathModels + "survey_collectors");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;
const generateLink = require(__pathHelper + "generate_link");
const surveyFormsModel = require(__pathModels + "survey_forms");

router.get("/:surveyCollectorId", async (req, res, next) => {
  const surveyCollectorId = paramsHelper.getParam(req.params, "surveyCollectorId", "");
  await surveyCollectorsModel.getSurveyCollectorsById(surveyCollectorId).then(surveyCollector => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyCollector]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/", async (req, res, next) => {
  const { user } = req;
  const params = {
    paging: {
      total: 0,
      pageSize: parseInt(paramsHelper.getParam(req.query, "pageSize", 10)),
      page: parseInt(paramsHelper.getParam(req.query, "page", 1))
    },
    searchValue: paramsHelper.getParam(req.query, "searchValue", ""),
    searchKey: paramsHelper.getParam(req.query, "searchKey", ""),
    currentStatus: paramsHelper.getParam(req.query, "status", "all"),
    sortField: paramsHelper.getParam(req.query, "sortField", "id"),
    sortType: paramsHelper.getParam(req.query, "sortType", "asc"),
    filterKey: paramsHelper.getParam(req.query, "filterKey", ""),
    filterValue: JSON.parse(paramsHelper.getParam(req.query, "filterValue", ""))
  };
  params.paging.total = await surveyCollectorsModel.countSurveyCollectors(params, { user }).catch(error => res.status(error.statusCode || 400).json(error));
  await surveyCollectorsModel.listDefaultSurveyCollectors(params, { user }).then(surveyCollectors => {
    res.status(200).json(new ResponsePaging(false, 200, "success", "Success", surveyCollectors, params.paging));
  });
});

router.delete("/:surveyCollectorId", (req, res, next) => {
  const surveyCollectorId = paramsHelper.getParam(req.params, "surveyCollectorId", "");
  surveyCollectorsModel.deleteSurveyCollectors(surveyCollectorId, { task: "delete-one" }).then(surveyCollector => {
    res.json(new Response(false, 200, "success", "Success", [surveyCollector]));
  })
    .catch(error =>
      res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
    );
});

router.put("/:surveyCollectorId", (req, res, next) => {
  const surveyCollectorId = paramsHelper.getParam(req.params, "surveyCollectorId", "");
  const surveyCollector = req.body ? req.body : {};
  surveyCollectorsModel.saveSurveyCollector(surveyCollector, surveyCollectorId, { task: "update" }).then(surveyCollector => {
    res.json(new Response(false, 200, "success", "Success", [surveyCollector]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/transfer/:surveyFormId", (req, res, next) => {
  const { user } = req;
  const surveyFormId = paramsHelper.getParam(req.params, "surveyFormId", "");
  surveyCollectorsModel.transferSurveyCollector(surveyFormId, user.id).then(surveyCollector => {
    res.json(new Response(false, 200, "success", "Success", [surveyCollector]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/", async (req, res, next) => {
  const { user } = req;
  const surveyCollector = req.body ? req.body : {};
  if (surveyCollector) {
    const params = {
      surveyFormId: surveyCollector.surveyFormId,
      type: surveyCollector.type
    };
    const numberCollector = await surveyCollectorsModel.countSurveyCollectorsByFormAndStatus(params, { user });
    surveyCollector.name = surveyCollector.name + " " + (numberCollector + 1);
    surveyCollector.url = generateLink.generateLink(7);
    surveyCollectorsModel.saveSurveyCollector(surveyCollector, null, { task: "create" }).then(surveyCollector => {
      res.json(new Response(false, 200, "success", "Success", [surveyCollector]));
    }).catch(error =>
      res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
    );
  }
});

module.exports = router;
