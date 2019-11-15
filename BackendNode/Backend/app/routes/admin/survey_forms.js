"use strict";
const express = require("express");
const router = express.Router();
const surveyFormsModel = require(__pathModels + "survey_forms");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;

router.get("/search", async (req, res, next) => {
  const title = paramsHelper.getParam(req.query, "title", "");
  const limit = paramsHelper.getParam(req.query, "limit", 5);
  await surveyFormsModel.searchSurveyFormsByTitle(title, { limit }).then(surveyForms => {
    res.status(200).json(new Response(false, 200, "success", "Success", surveyForms));
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
  params.paging.total = await surveyFormsModel.countSurveyForms(params).catch(error => res.status(error.statusCode || 400).json(error));
  await surveyFormsModel.listSurveyForms(params).then(surveyForms => {
    res.status(200).json(
      new ResponsePaging(false, 200, "success", "Success", surveyForms, params.paging)
    );
  });
});

router.get("/:surveyFormId", async (req, res, next) => {
  const surveyFormId = paramsHelper.getParam(req.params, "surveyFormId", "");
  await surveyFormsModel.getSurveyFormsById(surveyFormId).then(surveyForm => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyForm]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/surveyFormName/:surveyFormName", async (req, res, next) => {
  const surveyFormName = paramsHelper.getParam(req.params, "surveyFormName", "");
  await surveyFormsModel.getSurveyFormsBySurveyFormname(surveyFormName).then(surveyForm => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyForm]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/:surveyFormId", (req, res, next) => {
  const surveyFormId = paramsHelper.getParam(req.params, "surveyFormId", "");
  surveyFormsModel.deleteSurveyForms(surveyFormId, { task: "delete-one" }).then(surveyForm => {
    res.json(new Response(false, 200, "success", "Success", [surveyForm]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/change-role/:surveyFormId", (req, res, next) => {
  const params = {
    surveyFormId: paramsHelper.getParam(req.params, "surveyFormId", ""),
    roleId: paramsHelper.getParam(req.body, "roleId", "")
  };
  surveyFormsModel.changeRole(params).then(surveyForm => {
    res.json(new Response(false, 200, "success", "Success", [surveyForm]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/:surveyFormId", (req, res, next) => {
  const surveyFormId = paramsHelper.getParam(req.params, "surveyFormId", "");
  const surveyForm = req.body ? req.body : {};
  surveyFormsModel.saveSurveyForm(surveyForm, surveyFormId, { task: "update" }).then(surveyForm => {
    res.json(new Response(false, 200, "success", "Success", [surveyForm]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/delete-multy", (req, res, next) => {
  const surveyFormIds = paramsHelper.getParam(req.body, "surveyFormIds", "");
  if (!Array.isArray(surveyFormIds)) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.IS_ARRAY"));
  }
  surveyFormsModel.deleteSurveyForms(surveyFormIds, { task: "delete-many" }).then(surveyForms => {
    res.status(200).json(new Response(false, 200, "success", "Success", surveyForms));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/", (req, res, next) => {
  const surveyForm = req.body ? req.body : {};
  surveyFormsModel.saveSurveyForm(surveyForm, null, { task: "create" }).then(surveyForm => {
    res.json(new Response(false, 200, "success", "Success", [surveyForm]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

module.exports = router;
