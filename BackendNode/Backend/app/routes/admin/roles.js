"use strict";
const express = require("express");
const router = express.Router();
const rolesModel = require(__pathModels + "roles");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;

router.get("/all", (req, res, next) => {
  rolesModel.listAllRoles().then(roles => {
    res.status(200).json(new Response(false, 200, "success", "Success", roles));
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
  params.paging.total = await rolesModel.countRoles(params).catch(error => res.status(error.statusCode || 400).json(error));
  await rolesModel.listRoles(params).then(roles => {
    res.status(200).json(new ResponsePaging(false, 200, "success", "Success", roles, params.paging));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/:roleId", async (req, res, next) => {
  const roleId = paramsHelper.getParam(req.params, "roleId", "");
  await rolesModel.getRolesById(roleId).then(role => {
    res.status(200).json(new Response(false, 200, "success", "Success", [role]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/:roleId", (req, res, next) => {
  const roleId = paramsHelper.getParam(req.params, "roleId", "");
  if (req.user.role.id === roleId) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.DELETE_ROLE_YOURSELF"));
  }
  rolesModel.deleteRoles(roleId, { task: "delete-one" }).then(role => {
    res.status(200).json(new Response(false, 200, "success", "Success", [role]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/:roleId", (req, res, next) => {
  const roleId = paramsHelper.getParam(req.params, "roleId", "");
  const role = req.body ? req.body : {};
  rolesModel.saveRole(role, roleId, { task: "update" }).then(role => {
    res.status(200).json(new Response(false, 200, "success", "Success", [role]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/change-roleAcp/:roleId", (req, res, next) => {
  const roleId = paramsHelper.getParam(req.params, "roleId", "");
  rolesModel.changeRoleAcp(roleId).then(role => {
    res.status(200).json(new Response(false, 200, "success", "Success", [role]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/delete-multy", (req, res, next) => {
  const roleIds = paramsHelper.getParam(req.body, "roleIds", "");
  if (!Array.isArray(roleIds)) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.IS_ARRAY"));
  }
  if (roleIds.includes(req.user.role.id)) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.DELETE_ROLE_YOURSELF"));
  }
  rolesModel.deleteRoles(roleIds, { task: "delete-many" }).then(roles => {
    res.status(200).json(new Response(false, 200, "success", "Success", roles));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/", (req, res, next) => {
  const role = req.body ? req.body : {};
  rolesModel.saveRole(role, null, { task: "create" }).then(role => {
    res.status(200).json(new Response(false, 200, "success", "Success", [role]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

module.exports = router;
