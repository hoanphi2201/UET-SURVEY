"use strict";
const surveyFoldersModel = require(__pathSchemas)[databaseConfig.col_survey_folders];
const surveyFormsModel = require(__pathSchemas)[databaseConfig.col_survey_forms];
const usersModel = require(__pathSchemas)[databaseConfig.col_users];
const NotFound = require(__pathHelper + "error");
const Sequelize = require("sequelize");

module.exports = {
  listAllSurveyFolders: (params, options = null) => {
    return surveyFoldersModel.findAll({
      attributes: ["id", "title"]
    });
  },
  listSurveyFolders: (params, options = null) => {
    const objWhere = {};
    const order = [[params.sortField, params.sortType]];
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return surveyFoldersModel.findAll({
      where: objWhere,
      order: order,
      limit: params.paging.pageSize,
      offset: (params.paging.page - 1) * params.paging.pageSize,
      include: [
        {
          model: usersModel,
          attributes: ["id", "userName"]
        }
      ]
    });
  },
  getSurveyFoldersById: (surveyFolderId, options = null) => {
    return surveyFoldersModel.findByPk(surveyFolderId).then(surveyFolder => {
      if (surveyFolder) {
        return surveyFolder;
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  countSurveyFolders: params => {
    let objWhere = {};
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return surveyFoldersModel.count({
      where: objWhere
    });
  },
  deleteSurveyFolders: async (surveyFolderId, options = null) => {
    if (options.task === "delete-one") {
      const surveyFolder = await surveyFoldersModel.findByPk(surveyFolderId).then(surveyFolder => {
        if (surveyFolder) {
          return surveyFolder;
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
      await surveyFoldersModel.destroy({ where: { id: surveyFolderId } });
      return surveyFolder;
    } else if (options.task === "delete-many") {
      const surveyFolders = await surveyFoldersModel.findAll({
        where: { id: surveyFolderId }
      }).then(surveyFolders => {
        if (surveyFolders.length > 0) {
          return surveyFolders;
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
      await surveyFoldersModel.destroy({ where: { id: surveyFolderId } });
      return surveyFolders;
    }
  },
  saveSurveyFolder: async (surveyFolder, surveyFolderId = null, options = null) => {
    if (options.task === "update") {
      const existSurveyFolder = await module.exports.getSurveyFolderByTitleUserIdAndId(
        surveyFolder.title,
        surveyFolder.userId,
        surveyFolderId
      );
      if (!existSurveyFolder) {
        return surveyFoldersModel.findByPk(surveyFolderId).then(surveyFolderUpdate => {
          if (surveyFolderUpdate) {
            return surveyFolderUpdate.update(surveyFolder);
          }
          throw new NotFound("admin.layout.NOT_BE_BOUND");
        });
      }
      throw new NotFound("admin.layout.SURVEY_FOLDER_AREADY_EXIST");
    } else if (options.task === "create") {
      const existSurveyFolder = await module.exports.getSurveyFolderByTitleUserIdAndId(
        surveyFolder.title,
        surveyFolder.userId
      );
      if (!existSurveyFolder) {
        return surveyFoldersModel.create(surveyFolder);
      }
      throw new NotFound("admin.layout.SURVEY_FOLDER_AREADY_EXIST");
    }
  },
  getSurveyFolderByTitleUserIdAndId: (title, userId, surveyFolderId) => {
    const objWhere = { title, userId };
    if (surveyFolderId) {
      objWhere.id = { $ne: surveyFolderId };
    }
    return surveyFoldersModel.findOne({
      where: objWhere
    });
  },
  listAllHomeSurveyFolders: (options = null) => {
    const objWhere = { userId: options.user.id };
    return surveyFoldersModel.findAll({
      where: objWhere,
      attributes: ["id", "title",
        [Sequelize.fn("COUNT", Sequelize.col("survey_forms.id")), "totalForm"]
      ],
      include: [
        {
          model: surveyFormsModel,
          attributes: [],
          duplicating: false
        }
      ],
      group: ["survey_folders.id"],
      order: [["createdAt", "asc"]]
    });
  }
};
