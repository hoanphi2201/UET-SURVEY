"use strict";
const express = require("express");
const router = express.Router();
const usersModel = require(__pathModels + "users");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;

router.get("/search", async (req, res, next) => {
  const userName = paramsHelper.getParam(req.query, "userName", "");
  const limit = paramsHelper.getParam(req.query, "limit", 5);
  await usersModel.searchUsersByUserName(userName, { limit }).then(users => {
    res.status(200).json(new Response(false, 200, "success", "Success", users));
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

  params.paging.total = await usersModel.countUsers(params).catch(error => res.status(error.statusCode || 400).json(error));
  await usersModel.listUsers(params).then(users => {
    res.status(200).json(new ResponsePaging(false, 200, "success", "Success", users, params.paging));
  });
});

router.get("/:userId", async (req, res, next) => {
  const userId = paramsHelper.getParam(req.params, "userId", "");
  await usersModel.getUsersById(userId).then(user => {
    res.status(200).json(new Response(false, 200, "success", "Success", [user]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/userName/:userName", async (req, res, next) => {
  const userName = paramsHelper.getParam(req.params, "userName", "");
  await usersModel.getUsersByUsername(userName).then(user => {
    res.status(200).json(new Response(false, 200, "success", "Success", [user]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/delete-multy", (req, res, next) => {
  const userIds = paramsHelper.getParam(req.body, "userIds", "");
  if (!Array.isArray(userIds)) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.IS_ARRAY"));
  }
  if (userIds.includes(req.user.id)) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.DELETE_USER_YOURSELF"));
  }
  usersModel.deleteUsers(userIds, { task: "delete-many" }).then(users => {
    res.status(200).json(new Response(false, 200, "success", "Success", users));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.delete("/:userId", (req, res, next) => {
  const userId = paramsHelper.getParam(req.params, "userId", "");
  if (req.user.id === userId) {
    return res.status(400).json(new Response(true, 400, "error", "admin.layout.DELETE_USER_YOURSELF"));
  }
  usersModel.deleteUsers(userId, { task: "delete-one" }).then(user => {
    res.json(new Response(false, 200, "success", "Success", [user]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/change-role/:userId", (req, res, next) => {
  const params = {
    userId: paramsHelper.getParam(req.params, "userId", ""),
    roleId: paramsHelper.getParam(req.body, "roleId", "")
  };
  usersModel.changeRole(params).then(user => {
    res.json(new Response(false, 200, "success", "Success", [user]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.put("/:userId", (req, res, next) => {
  const userId = paramsHelper.getParam(req.params, "userId", "");
  const user = req.body ? req.body : {};
  usersModel.saveUser(user, userId, { task: "update" }).then(user => {
    res.json(new Response(false, 200, "success", "Success", [user]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.post("/", (req, res, next) => {
  const user = req.body ? req.body : {};
  usersModel.saveUser(user, null, { task: "create" }).then(user => {
    res.json(new Response(false, 200, "success", "Success", [user]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

module.exports = router;
