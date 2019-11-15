"use strict";
const express = require("express");
const router = express.Router();
const surveyCollectorsModel = require(__pathModels + "survey_collectors");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;

router.get("/search", async (req, res, next) => {
  const name = paramsHelper.getParam(req.query, "name", "");
  const limit = paramsHelper.getParam(req.query, "limit", 5);
  await surveyCollectorsModel.searchSurveyCollectorsByName(name, { limit }).then(surveyCollectors => {
    res.status(200).json(new Response(false, 200, "success", "Success", surveyCollectors));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
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
    currentStatus: paramsHelper.getParam(req.query, "status", "all"),
    sortField: paramsHelper.getParam(req.query, "sortField", "id"),
    sortType: paramsHelper.getParam(req.query, "sortType", "asc"),
    filterKey: paramsHelper.getParam(req.query, "filterKey", ""),
    filterValue: JSON.parse(paramsHelper.getParam(req.query, "filterValue", ""))
  };
  params.paging.total = await surveyCollectorsModel.countSurveyCollectors(params).catch(error => res.status(error.statusCode || 400).json(error));
  await surveyCollectorsModel.listSurveyCollectors(params).then(surveyCollectors => {
    res.status(200).json(new ResponsePaging(false, 200, "success", "Success", surveyCollectors, params.paging));
  });
});

router.get("/:surveyCollectorId", async (req, res, next) => {
  const surveyCollectorId = paramsHelper.getParam(req.params, "surveyCollectorId", "");
  await surveyCollectorsModel.getSurveyCollectorsById(surveyCollectorId).then(surveyCollector => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyCollector]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get(
  "/surveyCollectorName/:surveyCollectorName",
  async (req, res, next) => {
    const surveyCollectorName = paramsHelper.getParam(req.params, "surveyCollectorName", "");
    await surveyCollectorsModel.getSurveyCollectorsBySurveyCollectorname(surveyCollectorName).then(surveyCollector => {
      res.status(200).json(new Response(false, 200, "success", "Success", [surveyCollector]));
    }).catch(error =>
      res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
    );
  }
);

router.delete("/:surveyCollectorId", (req, res, next) => {
  const surveyCollectorId = paramsHelper.getParam(req.params, "surveyCollectorId", "");
  surveyCollectorsModel.deleteSurveyCollectors(surveyCollectorId, { task: "delete-one" }).then(surveyCollector => {
    res.json(new Response(false, 200, "success", "Success", [surveyCollector]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/change-role/:surveyCollectorId", (req, res, next) => {
  const params = {
    surveyCollectorId: paramsHelper.getParam(req.params, "surveyCollectorId", ""),
    roleId: paramsHelper.getParam(req.body, "roleId", "")
  };
  surveyCollectorsModel.changeRole(params).then(surveyCollector => {
    res.json(new Response(false, 200, "success", "Success", [surveyCollector]));
  }).catch(error =>
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

router.post("/delete-multy", (req, res, next) => {
  const surveyCollectorIds = paramsHelper.getParam(req.body, "surveyCollectorIds", "");
  if (!Array.isArray(surveyCollectorIds)) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.IS_ARRAY"));
  }
  surveyCollectorsModel.deleteSurveyCollectors(surveyCollectorIds, { task: "delete-many" }).then(surveyCollectors => {
    res.status(200).json(new Response(false, 200, "success", "Success", surveyCollectors));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/", (req, res, next) => {
  const surveyCollector = req.body ? req.body : {};
  surveyCollectorsModel.saveSurveyCollector(surveyCollector, null, { task: "create" }).then(surveyCollector => {
    res.json(new Response(false, 200, "success", "Success", [surveyCollector]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

module.exports = router;
