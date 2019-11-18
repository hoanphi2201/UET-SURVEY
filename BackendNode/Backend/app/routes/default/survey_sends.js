"use strict";
const express = require("express");
const router = express.Router();
const surveySendsModel = require(__pathModels + "survey_sends");
const usersModel = require(__pathModels + "users");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;
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
    params.paging.total = await surveySendsModel.countSurveySends(params, { user }).catch(error => res.status(error.statusCode || 400).json(error));
    await surveySendsModel.listSurveySends(params).then(surveySends => {
        res.status(200).json(new ResponsePaging(false, 200, "success", "Success", surveySends, params.paging));
    });
});

router.post("/", async (req, res, next) => {
    const { user } = req;
    const surveySend = Object.assign(req.body, { userId: user.id });
    const existUser = await usersModel.getUserByUserName(surveySend.to);
    if (!existUser) {
        return res.status(400).json(new Response(true, 400, "error", "default.layout.USER_NAME_NOT_BE_FOUND"));
    }
    surveySendsModel.saveSurveySend(surveySend, null, { task: "create" }).then(surveySend => {
        res.status(200).json(new Response(false, 200, "success", "Success", [surveySend]));
    }).catch(error => {
        return res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message));
    });
});

router.delete("/:surveySendId", async (req, res, next) => {
    const surveySendId = paramsHelper.getParam(req.params, "surveySendId", "");
    surveySendsModel.deleteSurveySends(surveySendId, { task: "delete-one" }).then(surveySend => {
        res.status(200).json(new Response(false, 200, "success", "Success", [surveySend]));
    }).catch(error =>
        res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
    );
});

module.exports = router;
