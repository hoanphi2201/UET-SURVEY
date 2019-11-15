"use strict";
const surveyFormsModel = require(__pathSchemas)[databaseConfig.col_survey_forms];
const surveyCollectorsModel = require(__pathSchemas)[databaseConfig.col_survey_collectors];
const surveyResponsesModel = require(__pathSchemas)[databaseConfig.col_survey_responses];
const usersModel = require(__pathSchemas)[databaseConfig.col_users];
const Sequelize = require("sequelize");
const NotFound = require(__pathHelper + "error");

module.exports = {
  listSurveyCollectors: (params, options = null) => {
    const objWhere = {};
    const order = [[params.sortField, params.sortType]];
    if (params.filterKey && params.filterValue.length > 0) {
      objWhere[params.filterKey] = { $in: params.filterValue };
    }
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return surveyCollectorsModel.findAll({
      where: objWhere,
      order: order,
      limit: params.paging.pageSize,
      offset: (params.paging.page - 1) * params.paging.pageSize,
      include: [
        {
          model: surveyFormsModel,
          as: "surveyForm",
          attributes: ["id", "title"]
        },
        {
          model: usersModel,
          attributes: ["id", "userName"]
        }
      ]
    });
  },
  getSurveyCollectorsById: (surveyCollectorId, options = null) => {
    return surveyCollectorsModel.findByPk(surveyCollectorId, {
      include: [
        {
          model: surveyFormsModel,
          as: "surveyForm",
          attributes: ["id", "title", "description"]
        }
      ]
    }).then(surveyCollector => {
      if (surveyCollector) {
        return surveyCollector;
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  searchSurveyCollectorsByName: (surveyCollectorName, options = null) => {
    return surveyCollectorsModel.findAll({
      where: { name: { $like: `%${surveyCollectorName}%` } },
      attributes: ["id", "name"],
      limit: options.limit
    });
  },
  countSurveyCollectors: (params, options = {}) => {
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
    return surveyCollectorsModel.count({
      where: objWhere
    });
  },
  deleteSurveyCollectors: async (surveyCollectorId, options = null) => {
    if (options.task === "delete-one") {
      const surveyCollector = await surveyCollectorsModel.findByPk(surveyCollectorId).then(surveyCollector => {
        if (surveyCollector) {
          return surveyCollector;
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
      await surveyCollectorsModel.destroy({ where: { id: surveyCollectorId } });
      return surveyCollector;
    } else if (options.task === "delete-many") {
      const surveyCollectors = await surveyCollectorsModel.findAll({
        where: { id: surveyCollectorId }
      }).then(surveyCollectors => {
        if (surveyCollectors.length > 0) {
          return surveyCollectors;
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
      await surveyCollectorsModel.destroy({ where: { id: surveyCollectorId } });
      return surveyCollectors;
    }
  },
  saveSurveyCollector: async (surveyCollector, surveyCollectorId = null, options = null) => {
    if (options.task == "update") {
      return surveyCollectorsModel.findByPk(surveyCollectorId).then(surveyCollectorUpdate => {
        if (surveyCollectorUpdate) {
          // tìm nếu ko có collector thì draff
          return surveyCollectorUpdate.update(surveyCollector);
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
    } else if (options.task == "create") {
      // tìm nếu ko có collector thì draff
      return surveyCollectorsModel.create(surveyCollector);
    }
  },
  listDefaultSurveyCollectors: (params, options = null) => {
    const objWhere = {
      userId: options.user.id
    };
    let order;
    if (["collector", "response"].includes(params.sortField)) {
      order = [[Sequelize.literal(params.sortField), params.sortType]];
    } else {
      order = [[params.sortField, params.sortType]];
    }
    if (params.filterKey && params.filterValue.length > 0) {
      objWhere[params.filterKey] = { $in: params.filterValue };
    }
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }

    return surveyCollectorsModel.findAll({
      attributes: ["id", "name", "type", "status", "updatedAt", "createdAt", "closedMessage",
        [
          Sequelize.fn("COUNT", Sequelize.col("survey_responses.id")),
          "response"
        ]
      ],
      where: objWhere,
      limit: params.paging.pageSize,
      offset: (params.paging.page - 1) * params.paging.pageSize,
      include: [
        {
          model: surveyResponsesModel,
          attributes: [],
          duplicating: false
        }
      ],
      order: order,
      group: ["survey_collectors.id"]
    });
  },
  // OPEN
  getSurveyCollectorsByUrl: (url, options = null) => {
    return surveyCollectorsModel.findOne({
      attributes: ["id", "name", "surveyFormId", "type", "status", "url", "thankYouMessage", "allowMultipleResponses", "displaySurveyResults", "closedMessage", "passwordEnabled"
      ],
      where: { url },
      include: [
        {
          model: surveyFormsModel,
          as: "surveyForm",
          attributes: ["id", "title", "json", "description"]
        }
      ]
    }).then(surveyCollector => {
      if (surveyCollector) {
        return surveyCollector;
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  compareSurveyCollectorPassword: params => {
    return surveyCollectorsModel.findOne({
      attributes: ["id"],
      where: { id: params.surveyCollectorId, password: params.password }
    }).then(surveyCollector => {
      if (surveyCollector) {
        return surveyCollector;
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  }
};
