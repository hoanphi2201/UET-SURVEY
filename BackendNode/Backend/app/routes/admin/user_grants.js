"use strict";
const express = require("express");
const router = express.Router();
const userGrantsModel = require(__pathModels + "user_grants");
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
    currentStatus: paramsHelper.getParam(req.query, "status", "all"),
    sortField: paramsHelper.getParam(req.query, "sortField", "id"),
    sortType: paramsHelper.getParam(req.query, "sortType", "asc"),
    filterKey: paramsHelper.getParam(req.query, "filterKey", ""),
    filterValue: JSON.parse(paramsHelper.getParam(req.query, "filterValue", ""))
  };
  params.paging.total = await userGrantsModel.countUserGrants(params).catch(error => res.status(error.statusCode || 400).json(error));
  await userGrantsModel.listUserGrants(params).then(userGrants => {
    res.status(200).json(new ResponsePaging(false, 200, "success", "Success", userGrants, params.paging));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/:userGrantId", (req, res, next) => {
  const userGrantId = paramsHelper.getParam(req.params, "userGrantId", "");
  userGrantsModel.getUserGrantsById(userGrantId).then(userGrant => {
    res.status(200).json(new Response(false, 200, "success", "Success", [userGrant]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/userGrantname/:userGrantname", (req, res, next) => {
  const userGrantname = paramsHelper.getParam(req.params, "userGrantname", "");
  userGrantsModel.getUserGrantsByUserGrantname(userGrantname).then(userGrant => {
    res.status(200).json(new Response(false, 200, "success", "Success", [userGrant]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/delete-multy", (req, res, next) => {
  const userGrantIds = paramsHelper.getParam(req.body, "userGrantIds", "");
  if (!Array.isArray(userGrantIds)) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.IS_ARRAY"));
  }
  userGrantsModel.deleteUserGrants(userGrantIds, { task: "delete-many" }).then(userGrants => {
    res.status(200).json(new Response(false, 200, "success", "Success", userGrants));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/:userGrantId", (req, res, next) => {
  const userGrantId = paramsHelper.getParam(req.params, "userGrantId", "");
  userGrantsModel.deleteUserGrants(userGrantId, { task: "delete-one" }).then(userGrant => {
    res.json(new Response(false, 200, "success", "Success", [userGrant]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/update-action/:userGrantId", (req, res, next) => {
  const userGrantId = paramsHelper.getParam(req.params, "userGrantId", "");
  const { actionKey } = req.body;
  userGrantsModel.updateAction(userGrantId, actionKey).then(userGrant => {
    res.json(new Response(false, 200, "success", "Success", [userGrant]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/:userGrantId", (req, res, next) => {
  const userGrantId = paramsHelper.getParam(req.params, "userGrantId", "");
  const userGrant = req.body ? req.body : {};
  userGrantsModel.saveUserGrant(userGrant, userGrantId, { task: "update" }).then(userGrant => {
    res.json(new Response(false, 200, "success", "Success", [userGrant]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/", (req, res, next) => {
  const userGrant = req.body ? req.body : {};
  userGrantsModel.saveUserGrant(userGrant, null, { task: "create" }).then(userGrant => {
    res.json(new Response(false, 200, "success", "Success", [userGrant]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

module.exports = router;
