"use strict";
const express = require("express");
const router = express.Router();
const usersModel = require(__pathModels + "users");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;

router.put("/:userId", (req, res, next) => {
  const userId = paramsHelper.getParam(req.params, "userId", "");
  const user = req.body ? req.body : {};
  usersModel
    .saveUser(user, userId, { task: "update" })
    .then(user => {
      res.json(new Response(false, 200, "success", "Success", [user]));
    })
    .catch(error =>
      res
        .status(error.statusCode || 400)
        .json(new Response(true, 400, "error", error.message))
    );
});
router.get("/userName/:userName", async (req, res, next) => {
  const userName = paramsHelper.getParam(req.params, "userName", "");
  await usersModel
    .getUsersByUsername(userName)
    .then(user => {
      res
        .status(200)
        .json(new Response(false, 200, "success", "Success", [user]));
    })
    .catch(error =>
      res
        .status(error.statusCode || 400)
        .json(new Response(true, 400, "error", error.message))
    );
});

module.exports = router;
