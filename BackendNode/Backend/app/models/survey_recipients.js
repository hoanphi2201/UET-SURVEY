"use strict";
const surveyRecipientsModel = require(__pathSchemas)[databaseConfig.col_survey_recipients];
const surveyCollectorsModel = require(__pathSchemas)[databaseConfig.col_survey_collectors];
const NotFound = require(__pathHelper + "error");

module.exports = {
    listSurveyRecipients: (params, options = null) => {
        const objWhere = {};
        const order = [[params.sortField, params.sortType]];
        if (params.searchKey !== "" && params.searchValue !== "") {
            objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
        }
        return surveyRecipientsModel.findAll({
            where: objWhere,
            order: order,
            limit: params.paging.pageSize,
            offset: (params.paging.page - 1) * params.paging.pageSize,
            include: [
                {
                    model: surveyCollectorsModel,
                    as: "surveyCollector",
                    attributes: ["id", "name"]
                }
            ]
        });
    },
    getSurveyRecipientsById: (surveyRecipientId, options = null) => {
        return surveyRecipientsModel.findByPk(surveyRecipientId).then(surveyRecipient => {
            if (surveyRecipient) {
                return surveyRecipient;
            }
            throw new NotFound("admin.layout.NOT_BE_BOUND");
        });
    },
    countSurveyRecipients: params => {
        let objWhere = {};
        if (params.searchKey !== "" && params.searchValue !== "") {
            objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
        }
        return surveyRecipientsModel.count({
            where: objWhere
        });
    },
    deleteSurveyRecipients: async (surveyRecipientId, options = null) => {
        if (options.task === "delete-one") {
            const surveyRecipient = await surveyRecipientsModel.findByPk(surveyRecipientId).then(surveyRecipient => {
                if (surveyRecipient) {
                    return surveyRecipient;
                }
                throw new NotFound("admin.layout.NOT_BE_BOUND");
            });
            await surveyRecipientsModel.destroy({ where: { id: surveyRecipientId } });
            return surveyRecipient;
        } else if (options.task === "delete-many") {
            const surveyRecipients = await surveyRecipientsModel.findAll({
                where: { id: surveyRecipientId }
            }).then(surveyRecipients => {
                if (surveyRecipients.length > 0) {
                    return surveyRecipients;
                }
                throw new NotFound("admin.layout.NOT_BE_BOUND");
            });
            await surveyRecipientsModel.destroy({ where: { id: surveyRecipientId } });
            return surveyRecipients;
        }
    },
    saveSurveyRecipient: async (surveyRecipient, surveyRecipientId = null, options = null) => {
        if (options.task === "update") {
            const existSurveyRecipient = await module.exports.getSurveyRecipientByEmailCollectorIdAndId(surveyRecipient.email, surveyRecipient.surveyCollectorId, surveyRecipientId);
            if (!existSurveyRecipient) {
                return surveyRecipientsModel.findByPk(surveyRecipientId).then(surveyRecipientUpdate => {
                    if (surveyRecipientUpdate) {
                        return surveyRecipientUpdate.update(surveyRecipient);
                    }
                    throw new NotFound("admin.layout.NOT_BE_BOUND");
                });
            }
            throw new NotFound("admin.layout.SURVEY_FOLDER_AREADY_EXIST");
        } else if (options.task === "create") {
            const existSurveyRecipient = await module.exports.getSurveyRecipientByEmailCollectorIdAndId(surveyRecipient.email, surveyRecipient.surveyCollectorId);
            if (!existSurveyRecipient) {
                return surveyRecipientsModel.create(surveyRecipient);
            }
            throw new NotFound("admin.layout.SURVEY_FOLDER_AREADY_EXIST");
        }
    },
    getSurveyRecipientByEmailCollectorIdAndId: (email, surveyCollectorId, surveyRecipientId) => {
        const objWhere = { email, surveyCollectorId };
        if (surveyRecipientId) {
            objWhere.id = { $ne: surveyRecipientId };
        }
        return surveyRecipientsModel.findOne({
            where: objWhere
        });
    },
    updateMailStatus: params => {
        return surveyRecipientsModel.update({ 
            mailStatus: params.mailStatus
        },{
            where: {
                email: { $in: params.emails },
                surveyCollectorId: params.surveyCollectorId
            }
        });
    }
};
