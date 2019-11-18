"use strict";
const express = require("express");
const router = express.Router();
const surveyFoldersModel = require(__pathModels + "survey_folders");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;

router.get("/all", (req, res, next) => {
  surveyFoldersModel.listAllSurveyFolders().then(surveyFolders => {
    res.status(200).json(new Response(false, 200, "success", "Success", surveyFolders));
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
    sortField: paramsHelper.getParam(req.query, "sortField", "id"),
    sortType: paramsHelper.getParam(req.query, "sortType", "asc")
  };
  params.paging.total = await surveyFoldersModel.countSurveyFolders(params).catch(error => res.status(error.statusCode || 400).json(error));
  await surveyFoldersModel.listSurveyFolders(params).then(surveyFolders => {
    res.status(200).json(
      new ResponsePaging(false, 200, "success", "Success", surveyFolders, params.paging));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/:surveyFolderId", async (req, res, next) => {
  const surveyFolderId = paramsHelper.getParam(req.params, "surveyFolderId", "");
  await surveyFoldersModel.getSurveyFoldersById(surveyFolderId).then(surveyFolder => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyFolder]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/delete-multy", (req, res, next) => {
  const surveyFolderIds = paramsHelper.getParam(req.body, "surveyFolderIds", "");
  if (!Array.isArray(surveyFolderIds)) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.IS_ARRAY"));
  }
  surveyFoldersModel.deleteSurveyFolders(surveyFolderIds, { task: "delete-many" }).then(surveyFolders => {
    res.status(200).json(new Response(false, 200, "success", "Success", surveyFolders));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/:surveyFolderId", (req, res, next) => {
  const surveyFolderId = paramsHelper.getParam(req.params, "surveyFolderId", "");
  surveyFoldersModel.deleteSurveyFolders(surveyFolderId, { task: "delete-one" }).then(surveyFolder => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyFolder]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/:surveyFolderId", (req, res, next) => {
  const surveyFolderId = paramsHelper.getParam(req.params, "surveyFolderId", "");
  const surveyFolder = req.body ? req.body : {};
  surveyFoldersModel.saveSurveyFolder(surveyFolder, surveyFolderId, { task: "update" }).then(surveyFolder => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyFolder]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/", (req, res, next) => {
  const surveyFolder = req.body ? req.body : {};
  surveyFoldersModel.saveSurveyFolder(surveyFolder, null, { task: "create" }).then(surveyFolder => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyFolder]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

module.exports = router;
