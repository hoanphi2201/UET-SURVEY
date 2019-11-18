"use strict";
const express = require("express");
const router = express.Router();
const surveyFoldersModel = require(__pathModels + "survey_folders");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;

router.get("/all", (req, res, next) => {
  const { user } = req;
  surveyFoldersModel.listAllHomeSurveyFolders({ user }).then(surveyFolders => {
    res.status(200).json(new Response(false, 200, "success", "Success", surveyFolders));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/:surveyFolderId", (req, res, next) => {
  const surveyFolderId = paramsHelper.getParam(req.params, "surveyFolderId", "");
  const { user } = req;
  const surveyFolder = Object.assign(req.body, { userId: user.id });
  surveyFoldersModel.saveSurveyFolder(surveyFolder, surveyFolderId, { task: "update" }).then(surveyFolder => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyFolder]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/", (req, res, next) => {
  const { user } = req;
  const surveyFolder = Object.assign(req.body, { userId: user.id });
  surveyFoldersModel.saveSurveyFolder(surveyFolder, null, { task: "create" }).then(surveyFolder => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyFolder]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/:surveyFolderId", async (req, res, next) => {
  const surveyFolderId = paramsHelper.getParam(req.params, "surveyFolderId", "");
  surveyFoldersModel.deleteSurveyFolders(surveyFolderId, { task: "delete-one" }).then(surveyFolder => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyFolder]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});
module.exports = router;
