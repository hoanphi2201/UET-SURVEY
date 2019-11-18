"use strict";
const express = require("express");
const router = express.Router();
const roleGrantsModel = require(__pathModels + "role_grants");
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
  params.paging.total = await roleGrantsModel.countRoleGrants(params).catch(error => res.status(error.statusCode || 400).json(error));
  await roleGrantsModel.listRoleGrants(params).then(roleGrants => {
    res.status(200).json(new ResponsePaging(false, 200, "success", "Success", roleGrants, params.paging));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/:roleGrantId", (req, res, next) => {
  const roleGrantId = paramsHelper.getParam(req.params, "roleGrantId", "");
  roleGrantsModel.getRoleGrantsById(roleGrantId).then(roleGrant => {
    res.status(200).json(new Response(false, 200, "success", "Success", [roleGrant]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/roleGrantname/:roleGrantname", (req, res, next) => {
  const roleGrantname = paramsHelper.getParam(req.params, "roleGrantname", "");
  roleGrantsModel.getRoleGrantsByRoleGrantname(roleGrantname).then(roleGrant => {
    res.status(200).json(new Response(false, 200, "success", "Success", [roleGrant]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/delete-multy", (req, res, next) => {
  const roleGrantIds = paramsHelper.getParam(req.body, "roleGrantIds", "");
  if (!Array.isArray(roleGrantIds)) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.IS_ARRAY"));
  }
  roleGrantsModel.deleteRoleGrants(roleGrantIds, { task: "delete-many" }).then(roleGrants => {
    res.status(200).json(new Response(false, 200, "success", "Success", roleGrants));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/:roleGrantId", (req, res, next) => {
  const roleGrantId = paramsHelper.getParam(req.params, "roleGrantId", "");
  roleGrantsModel.deleteRoleGrants(roleGrantId, { task: "delete-one" }).then(roleGrant => {
    res.json(new Response(false, 200, "success", "Success", [roleGrant]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/update-action/:roleGrantId", (req, res, next) => {
  const roleGrantId = paramsHelper.getParam(req.params, "roleGrantId", "");
  const { actionKey } = req.body;
  roleGrantsModel.updateAction(roleGrantId, actionKey).then(roleGrant => {
    res.json(new Response(false, 200, "success", "Success", [roleGrant]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/:roleGrantId", (req, res, next) => {
  const roleGrantId = paramsHelper.getParam(req.params, "roleGrantId", "");
  const roleGrant = req.body ? req.body : {};
  roleGrantsModel.saveRoleGrant(roleGrant, roleGrantId, { task: "update" }).then(roleGrant => {
    res.json(new Response(false, 200, "success", "Success", [roleGrant]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});



router.post("/", (req, res, next) => {
  const roleGrant = req.body ? req.body : {};
  roleGrantsModel.saveRoleGrant(roleGrant, null, { task: "create" }).then(roleGrant => {
    res.json(new Response(false, 200, "success", "Success", [roleGrant]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

module.exports = router;
