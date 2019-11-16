"use strict";
const express = require("express");
const router = express.Router();
const surveyRecipientsModel = require(__pathModels + "survey_recipients");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const mailHelper = require(__pathHelper + "mail");
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;

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
  params.paging.total = await surveyRecipientsModel.countSurveyRecipients(params, { user }).catch(error => res.status(error.statusCode || 400).json(error));
  await surveyRecipientsModel.listSurveyRecipients(params).then(surveyRecipients => {
    res.status(200).json(new ResponsePaging(false, 200, "success", "Success", surveyRecipients, params.paging));
  });
});

router.put("/:surveyRecipientId", (req, res, next) => {
  const surveyRecipientId = paramsHelper.getParam(req.params, "surveyRecipientId", "");
  const { user } = req;
  const surveyRecipient = Object.assign(req.body, { userId: user.id });
  surveyRecipientsModel.saveSurveyRecipient(surveyRecipient, surveyRecipientId, { task: "update" }).then(surveyRecipient => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveyRecipient]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/:surveyRecipientId", async (req, res, next) => {
  const surveyRecipientId = paramsHelper.getParam(req.params, "surveyRecipientId", "");
  surveyRecipientsModel.deleteSurveyRecipients(surveyRecipientId, { task: "delete-one" }).then(surveyRecipient => {
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

router.post("/multy", (req, res, next) => {
  const recipients = req.body ? req.body : [];
  if (!recipients || recipients.length === 0) {
    return res.status(400).json(new Response(true, 400, "error", "default.layout.PARAMETER_IS_MISSING"));
  }
  const promiseSave = recipients.map(async recipient => {
    return await surveyRecipientsModel.saveSurveyRecipient(recipient, null, { task: "create" }).catch(error =>
      console.log(error)
    );
  })
  Promise.all(promiseSave).then(surveyRecipient => {
    res.status(200).json(new Response(false, 200, "success", "Success", surveyRecipient));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/send-email", (req, res, next) => {
  const recipients = req.body ? req.body : [];
  const { emails } = recipients;
  if (!emails || emails.length === 0) {
    return res.status(400).json(new Response(true, 400, "error", "default.layout.PARAMETER_IS_MISSING"));
  }
  const promiseSendMail = emails.map(async email => {
    return await mailHelper.sendMailInvite(recipients.subject, recipients.message, recipients.surveyCollector, email);
  })
  Promise.all(promiseSendMail).then(async _ => {
    const params = {
      mailStatus: "SENT",
      emails,
      surveyCollectorId: recipients.surveyCollector.id
    }
    await surveyRecipientsModel.updateMailStatus(params).catch(error =>
      res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
    );
    res.status(200).json(new Response(false, 200, "success", "Success", []));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});



module.exports = router;
