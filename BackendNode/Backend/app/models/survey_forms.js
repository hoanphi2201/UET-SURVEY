"use strict";
const surveyFormsModel = require(__pathSchemas)[databaseConfig.col_survey_forms];
const surveyCollectorsModel = require(__pathSchemas)[databaseConfig.col_survey_collectors];
const surveyResponsesModel = require(__pathSchemas)[databaseConfig.col_survey_responses];
const surveyFoldersModel = require(__pathSchemas)[databaseConfig.col_survey_folders];
const usersModel = require(__pathSchemas)[databaseConfig.col_users];
const NotFound = require(__pathHelper + "error");
const Sequelize = require("sequelize");

module.exports = {
  listSurveyForms: (params, options = null) => {
    const objWhere = {};
    const order = [[params.sortField, params.sortType]];
    if (params.filterKey && params.filterValue.length > 0) {
      objWhere[params.filterKey] = { $in: params.filterValue };
    }
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return surveyFormsModel.findAll({
      where: objWhere,
      order: order,
      limit: params.paging.pageSize,
      offset: (params.paging.page - 1) * params.paging.pageSize,
      include: [
        {
          model: surveyFoldersModel,
          as: "surveyFolder",
          attributes: ["id", "title"]
        },
        {
          model: usersModel,
          attributes: ["id", "userName"]
        }
      ]
    });
  },
  getSurveyFormsById: (surveyFormId, options = null) => {
    return surveyFormsModel.findByPk(surveyFormId, {
        attributes: [ 
          "category", "createdAt", "description", "id", "isFavorite", "json", "status", "surveyFolderId", "title", "updatedAt", "userId",
          [ Sequelize.fn("COUNT", Sequelize.col("survey_responses.id")),"response" ]
        ],
        include: [
          {
            model: surveyResponsesModel,
            attributes: [],
            duplicating: false
          }
        ],
        group: ["survey_forms.id"]
      }).then(surveyForm => {
        if (surveyForm) {
          return surveyForm;
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
  },
  searchSurveyFormsByTitle: (surveyFormTitle, options = null) => {
    return surveyFormsModel.findAll({
      where: { title: { $like: `%${surveyFormTitle}%` } },
      attributes: ["id", "title"],
      limit: options.limit
    });
  },
  countSurveyForms: (params, options = {}) => {
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
    return surveyFormsModel.count({
      where: objWhere
    });
  },
  changeSurveyFolder: (params, options = null) => {
    return surveyFormsModel.findByPk(params.surveyFormId).then(surveyForm => {
      if (surveyForm) {
        return surveyForm.update({ SurveyFolderId: params.SurveyFolderId });
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  deleteSurveyForms: async (surveyFormId, options = null) => {
    if (options.task === "delete-one") {
      const surveyForm = await surveyFormsModel.findByPk(surveyFormId).then(surveyForm => {
          if (surveyForm) {
            return surveyForm;
          }
          throw new NotFound("admin.layout.NOT_BE_BOUND");
        });
      await surveyFormsModel.destroy({ where: { id: surveyFormId } });
      return surveyForm;
    } else if (options.task === "delete-many") {
      const surveyForms = await surveyFormsModel.findAll({
          where: { id: surveyFormId }
        }).then(surveyForms => {
          if (surveyForms.length > 0) {
            return surveyForms;
          }
          throw new NotFound("admin.layout.NOT_BE_BOUND");
        });
      await surveyFormsModel.destroy({ where: { id: surveyFormId } });
      return surveyForms;
    }
  },
  saveSurveyForm: async (surveyForm, surveyFormId = null, options = null) => {
    if (options.task == "update") {
      return surveyFormsModel.findByPk(surveyFormId).then(surveyFormUpdate => {
        if (surveyFormUpdate) {
          return surveyFormUpdate.update(surveyForm);
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
    } else if (options.task == "create") {
      return surveyFormsModel.create(surveyForm);
    }
  },
  listDefaultSurveyForms: (params, options = null) => {
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
    const attributes = [ 
      "id", "title", "updatedAt", "createdAt", "json", "status", "isFavorite"
    ];
    const include = [];

    if (params.countColumn) {
      if (params.countColumn === "collector") {
        attributes.push([
          Sequelize.fn("COUNT", Sequelize.col("survey_collectors.id")), "collector"
        ]);
        include.push({
          model: surveyCollectorsModel,
          attributes: [],
          duplicating: false
        });
      } else if (params.countColumn === "response") {
        attributes.push([
          Sequelize.fn("COUNT", Sequelize.col("survey_responses.id")),"response"
        ]);
        include.push({
          model: surveyResponsesModel,
          attributes: [],
          duplicating: false
        });
      }
    }

    return surveyFormsModel.findAll({
      where: objWhere,
      attributes,
      limit: params.paging.pageSize,
      offset: (params.paging.page - 1) * params.paging.pageSize,
      include,
      group: ["survey_forms.id"],
      order
    });
  },
  searchSurveyByTitle: (title, options = null) => {
    return surveyFormsModel.findAll({
      where: { title: { $like: `%${title}%` }, userId: options.user.id },
      attributes: ["id", "title"],
      limit: options.limit
    });
  },
  countSurveyStatus: (options = null) => {
    return surveyFormsModel.findAll({
      where: { userId: options.user.id },
      attributes: [
        "status",
        [Sequelize.fn("COUNT", Sequelize.col("status")), "total"]
      ],
      group: ["survey_forms.status"]
    });
  },
  moveSurveyToFolder: async (surveyFolderId, surveyFormIds, options = null) => {
    const surveyForms = await surveyFormsModel.findAll({
        where: { id: surveyFormIds }
      }).then(surveyForms => {
        if (surveyForms.length > 0) {
          return surveyForms;
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
    await surveyFormsModel.update(
      { surveyFolderId },
      { where: { id: surveyFormIds } }
    );
    return surveyForms;
  },
  listSurveyFormByFolderId: (surveyFolderId, options = null) => {
    const attributes = ["id"];
    if (options && options.attributes) {
      attributes = options.attributes;
    }
    return surveyFormsModel.findAll({
      where: {
        surveyFolderId
      },
      attributes
    });
  },
  changeSurveyStatus: (params, options = null) => {
    return surveyFormsModel.findByPk(params.surveyFormId).then(surveyForm => {
      if (surveyForm) {
        return surveyForm.update({ status: params.status });
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  }
};
