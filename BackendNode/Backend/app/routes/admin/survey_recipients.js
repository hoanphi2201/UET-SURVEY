"use strict";
const express = require("express");
const router = express.Router();
const surveyRecipientsModel = require(__pathModels + "survey_recipients");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;


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
  params.paging.total = await surveyRecipientsModel.countSurveyRecipients(params, {page: 'admin'}).catch(error => res.status(error.statusCode || 400).json(error));
  await surveyRecipientsModel.listSurveyRecipients(params, {page: 'admin'}).then(surveyRecipients => {
    res.status(200).json(
      new ResponsePaging(false, 200, "success", "Success", surveyRecipients, params.paging));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/:surveyRecipientId", async (req, res, next) => {
  const surveyRecipientId = paramsHelper.getParam(req.params, "surveyRecipientId", "");
  await surveyRecipientsModel.getSurveyRecipientsById(surveyRecipientId).then(surveyRecipient => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyRecipient]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/delete-multy", (req, res, next) => {
  const surveyRecipientIds = paramsHelper.getParam(req.body, "surveyRecipientIds", "");
  if (!Array.isArray(surveyRecipientIds)) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.IS_ARRAY"));
  }
  surveyRecipientsModel.deleteSurveyRecipients(surveyRecipientIds, { task: "delete-many" }).then(surveyRecipients => {
    res.status(200).json(new Response(false, 200, "success", "Success", surveyRecipients));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/:surveyRecipientId", (req, res, next) => {
  const surveyRecipientId = paramsHelper.getParam(req.params, "surveyRecipientId", "");
  surveyRecipientsModel.deleteSurveyRecipients(surveyRecipientId, { task: "delete-one" }).then(surveyRecipient => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyRecipient]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/:surveyRecipientId", (req, res, next) => {
  const surveyRecipientId = paramsHelper.getParam(req.params, "surveyRecipientId", "");
  const surveyRecipient = req.body ? req.body : {};
  surveyRecipientsModel.saveSurveyRecipient(surveyRecipient, surveyRecipientId, { task: "update" }).then(surveyRecipient => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyRecipient]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/", (req, res, next) => {
  const surveyRecipient = req.body ? req.body : {};
  surveyRecipientsModel.saveSurveyRecipient(surveyRecipient, null, { task: "create" }).then(surveyRecipient => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyRecipient]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

module.exports = router;
