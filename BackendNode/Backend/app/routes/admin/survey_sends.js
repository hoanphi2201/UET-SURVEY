"use strict";
const express = require("express");
const router = express.Router();
const surveySendsModel = require(__pathModels + "survey_sends");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;

router.get("/all", (req, res, next) => {
  surveySendsModel.listAllSurveySends().then(surveySends => {
    res.status(200).json(new Response(false, 200, "success", "Success", surveySends));
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
  params.paging.total = await surveySendsModel.countSurveySends(params).catch(error => res.status(error.statusCode || 400).json(error));
  await surveySendsModel.listSurveySends(params).then(surveySends => {
    res.status(200).json(
      new ResponsePaging(false, 200, "success", "Success", surveySends, params.paging));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/:surveySendId", async (req, res, next) => {
  const surveySendId = paramsHelper.getParam(req.params, "surveySendId", "");
  await surveySendsModel.getSurveySendsById(surveySendId).then(surveySend => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveySend]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/delete-multy", (req, res, next) => {
  const surveySendIds = paramsHelper.getParam(req.body, "surveySendIds", "");
  if (!Array.isArray(surveySendIds)) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.IS_ARRAY"));
  }
  surveySendsModel.deleteSurveySends(surveySendIds, { task: "delete-many" }).then(surveySends => {
    res.status(200).json(new Response(false, 200, "success", "Success", surveySends));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/:surveySendId", (req, res, next) => {
  const surveySendId = paramsHelper.getParam(req.params, "surveySendId", "");
  surveySendsModel.deleteSurveySends(surveySendId, { task: "delete-one" }).then(surveySend => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveySend]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/:surveySendId", (req, res, next) => {
  const surveySendId = paramsHelper.getParam(req.params, "surveySendId", "");
  const surveySend = req.body ? req.body : {};
  surveySendsModel.saveSurveySend(surveySend, surveySendId, { task: "update" }).then(surveySend => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveySend]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/", (req, res, next) => {
  const surveySend = req.body ? req.body : {};
  surveySendsModel.saveSurveySend(surveySend, null, { task: "create" }).then(surveySend => {
    res.status(200).json(new Response(false, 200, "success", "Success", [surveySend]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

module.exports = router;
