"use strict";
const express = require("express");
const router = express.Router();
const usersModel = require(__pathModels + "users");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
const ResponsePaging = require(__pathHelper + "response").ResponsePaging;
const fs = require('fs');
const uploadFolder = 'public/uploads/users/';
const fileHelper = require(__pathHelper + 'file');

router.put("/:userId", (req, res, next) => {
  const userId = paramsHelper.getParam(req.params, "userId", "");
  const user = req.body ? req.body : {};
  usersModel.saveUser(user, userId, { task: "update" }).then(user => {
    res.json(new Response(false, 200, "success", "Success", [user]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});

router.get("/avatar-encoded", async (req, res, next) => {
  const { user } = req;
  if (user.avatar) {
    try {
      const pathUpload = uploadFolder + user.avatar;
      const bitmap = fs.readFileSync(pathUpload);
      const base64Image = new Buffer(bitmap).toString('base64');
      return res.json(new Response(false, 200, "success", "Success", [{base64Image}]));
    } catch (error) {
      return res.json(new Response(false, 400, "success", "Success", [{base64Image: null}]));
    }
  }
  return res.json(new Response(false, 400, "success", "Success", [{base64Image: null}]));
});

router.put("/upload-avatar/:userId", (req, res, next) => {
  const userId = paramsHelper.getParam(req.params, "userId", "");
  const { base64Image } = req.body;
  const { user } = req;
  if (!userId || !base64Image) {
    return res.status(400).json(new Response(true, 400, "error", "default.layout.PARAMETER_IS_MISSING"));
  }
  const avatar = `${user.userName}-${new Date().getTime()}.png`
  const pathUpload = uploadFolder + avatar;
  try {
    if (user.avatar) {
      fileHelper.remove(uploadFolder, user.avatar);
    }
    fs.writeFile(pathUpload, base64Image.replace(/^data:image\/[a-z]+;base64,/, ""), { encoding: 'base64' }, (error) => {
      if (error) {
        return res.status(400).json(new Response(true, 400, "error", "default.layout.FAIL_TO_UPLOAD_AVATAR"));
      }
    });
  } catch (error) {
    return res.status(400).json(new Response(true, 400, "error", "default.layout.FAIL_TO_UPLOAD_AVATAR"));
  }

  usersModel.saveUser({avatar, userName: user.userName}, userId, { task: "update" }).then(user => {
    res.json(new Response(false, 200, "success", "Success", [user]));
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

module.exports = router;
