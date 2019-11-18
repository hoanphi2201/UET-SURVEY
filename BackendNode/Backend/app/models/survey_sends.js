"use strict";
const surveySendsModel = require(__pathSchemas)[databaseConfig.col_survey_sends];
const surveyFormsModel = require(__pathSchemas)[databaseConfig.col_survey_forms];
const usersModel = require(__pathSchemas)[databaseConfig.col_users];
const NotFound = require(__pathHelper + "error");
const Sequelize = require("sequelize");

module.exports = {
    listSurveySends: (params, options = null) => {
        const objWhere = {};
        const order = [[params.sortField, params.sortType]];
        if (params.searchKey !== "" && params.searchValue !== "") {
            objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
        }
        if (params.filterKey && params.filterValue.length > 0) {
            objWhere[params.filterKey] = { $in: params.filterValue };
        }
        return surveySendsModel.findAll({
            where: objWhere,
            order: order,
            limit: params.paging.pageSize,
            offset: (params.paging.page - 1) * params.paging.pageSize,
            include: [
                {
                    model: usersModel,
                    attributes: ["id", "userName", "avatar"]
                },
                {
                    model: surveyFormsModel,
                    as: "surveyForm",
                    attributes: ["id", "title", "json", "description"]
                }
            ]
        });
    },
    getSurveySendsById: (surveySendId, options = null) => {
        return surveySendsModel.findByPk(surveySendId, {
            include: [
                {
                    model: usersModel,
                    attributes: ["id", "userName", "avatar"]
                },
                {
                    model: surveyFormsModel,
                    as: "surveyForm",
                    attributes: ["id", "title", "json", "description"]
                }
            ]
        }).then(surveySend => {
            if (surveySend) {
                return surveySend;
            }
            throw new NotFound("admin.layout.NOT_BE_BOUND");
        });
    },
    countSurveySends: params => {
        let objWhere = {};
        if (params.searchKey !== "" && params.searchValue !== "") {
            objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
        }
        if (params.filterKey && params.filterValue.length > 0) {
            objWhere[params.filterKey] = { $in: params.filterValue };
        }
        return surveySendsModel.count({
            where: objWhere
        });
    },
    deleteSurveySends: async (surveySendId, options = null) => {
        if (options.task === "delete-one") {
            const surveySend = await surveySendsModel.findByPk(surveySendId).then(surveySend => {
                if (surveySend) {
                    return surveySend;
                }
                throw new NotFound("admin.layout.NOT_BE_BOUND");
            });
            await surveySendsModel.destroy({ where: { id: surveySendId } });
            return surveySend;
        } else if (options.task === "delete-many") {
            const surveySends = await surveySendsModel.findAll({
                where: { id: surveySendId }
            }).then(surveySends => {
                if (surveySends.length > 0) {
                    return surveySends;
                }
                throw new NotFound("admin.layout.NOT_BE_BOUND");
            });
            await surveySendsModel.destroy({ where: { id: surveySendId } });
            return surveySends;
        }
    },
    saveSurveySend: async (surveySend, surveySendId = null, options = null) => {
        if (options.task === "update") {
            const existSurveySend = await module.exports.getSurveySendByFromToForm(surveySend.from, surveySend.to, surveySend.surveyFormId, surveySendId);
            if (!existSurveySend) {
                return surveySendsModel.findByPk(surveySendId).then(surveySendUpdate => {
                    if (surveySendUpdate) {
                        return surveySendUpdate.update(surveySend);
                    }
                    throw new NotFound("default.layout.NOT_BE_BOUND");
                });
            }
            throw new NotFound("default.layout.SURVEY_SEND_AREADY_EXIST");
        } else if (options.task === "create") {
            const existSurveySend = await module.exports.getSurveySendByFromToForm(surveySend.from, surveySend.to, surveySend.surveyFormId);
            if (!existSurveySend) {
                const intance = await surveySendsModel.create(surveySend);
                return module.exports.getSurveySendsById(intance.id);
            }
            throw new NotFound("default.layout.SURVEY_SEND_AREADY_EXIST");
        }
    },
    getSurveySendByFromToForm: (from, to, surveyFormId, surveySendId) => {
        const objWhere = { from, to, surveyFormId };
        if (surveySendId) {
            objWhere.id = { $ne: surveySendId };
        }
        return surveySendsModel.findOne({
            where: objWhere
        });
    }
};
