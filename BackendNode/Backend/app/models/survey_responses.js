"use strict";
const surveyFormsModel = require(__pathSchemas)[databaseConfig.col_survey_forms];
const surveyResponsesModel = require(__pathSchemas)[databaseConfig.col_survey_responses];
const surveyCollectorsModel = require(__pathSchemas)[databaseConfig.col_survey_collectors];
const NotFound = require(__pathHelper + "error");

module.exports = {
  listSurveyResponses: (params, options = null) => {
    const objWhere = {};
    const order = [[params.sortField, params.sortType]];
    if (params.filterKey && params.filterValue.length > 0) {
      objWhere[params.filterKey] = { $in: params.filterValue };
    }
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return surveyResponsesModel.findAll({
      where: objWhere,
      order: order,
      limit: params.paging.pageSize,
      offset: (params.paging.page - 1) * params.paging.pageSize,
      include: [
        {
          model: surveyFormsModel,
          as: "surveyForm",
          attributes: ["id", "title", "json"]
        },
        {
          model: surveyCollectorsModel,
          as: "surveyCollector",
          attributes: ["id", "name"]
        }
      ]
    });
  },
  getSurveyResponsesById: (surveyResponseId, options = null) => {
    return surveyResponsesModel.findByPk(surveyResponseId).then(surveyResponse => {
      if (surveyResponse) {
        return surveyResponse;
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  searchSurveyResponsesByName: (surveyResponseName, options = null) => {
    return surveyResponsesModel.findAll({
      where: { name: { $like: `%${surveyResponseName}%` } },
      attributes: ["id", "name"],
      limit: options.limit
    });
  },
  countSurveyResponses: (params, options = {}) => {
    let objWhere = {};
    const { user } = options;
    if (user) {
      objWhere.userId = options.user.id;
    }
    if (params.filterKey && params.filterValue.length > 0) {
      objWhere[params.filterKey] = { $in: params.filterValue };
    }
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return surveyResponsesModel.count({
      where: objWhere
    });
  },
  deleteSurveyResponses: async (surveyResponseId, options = null) => {
    if (options.task === "delete-one") {
      const surveyResponse = await surveyResponsesModel.findByPk(surveyResponseId).then(surveyResponse => {
        if (surveyResponse) {
          return surveyResponse;
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
      await surveyResponsesModel.destroy({ where: { id: surveyResponseId } });
      return surveyResponse;
    } else if (options.task === "delete-many") {
      const surveyResponses = await surveyResponsesModel.findAll({
        where: { id: surveyResponseId }
      }).then(surveyResponses => {
        if (surveyResponses.length > 0) {
          return surveyResponses;
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
      await surveyResponsesModel.destroy({ where: { id: surveyResponseId } });
      return surveyResponses;
    }
  },
  saveSurveyResponse: async (surveyResponse, surveyResponseId = null, options = null) => {
    if (options.task == "update") {
      return surveyResponsesModel.findByPk(surveyResponseId).then(surveyResponseUpdate => {
        if (surveyResponseUpdate) {
          return surveyResponseUpdate.update(surveyResponse);
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
    } else if (options.task == "create") {
      return surveyResponsesModel.create(surveyResponse);
    }
  },
  getSurveyResponsesByIpAddress: (params, options = null) => {
    return surveyResponsesModel.findOne({
      where: params
    });
  },
  countSurveyResponsesByFormAndCollector: (params, options) => {
    let objWhere = params;
    return surveyResponsesModel.count({
      where: objWhere
    });
  },
  countAllSurveyResponses: (params, options) => {
    return surveyResponsesModel.count({
      where: params,
      include: [
        {
          model: surveyCollectorsModel,
          as: "surveyCollector",
          where: {userId: options.user.id}
        }
      ]
    });
  },
  countTypicalTimeSpent: (params, options) => {
    return surveyResponsesModel.sum('totalTime', {
      includeIgnoreAttributes: false,
      include: [
        {
          model: surveyCollectorsModel,
          as: "surveyCollector",
          where: { userId: options.user.id }
        }
      ]
    });
  },
  clearResponsesByCollector: params => {
    return surveyResponsesModel.destroy({ where: params });
  },
  clearResponsesByForm: params => {
    return surveyResponsesModel.destroy({ where: params });
  },
  getResponsesBySurveyForm: params => {
    return surveyResponsesModel.findAll({
      where: params,
      include: [
        {
          model: surveyCollectorsModel,
          as: "surveyCollector",
          attributes: ["id", "name", "type"]
        },
        {
          model: surveyFormsModel,
          as: "surveyForm",
          attributes: ["json"]
        }
      ],
      order: [["createdAt", "DESC"]]
    });
  }
};
