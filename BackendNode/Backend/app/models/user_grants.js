"use strict";
const userGrantsModel = require(__pathSchemas)[databaseConfig.col_user_grants];
const usersModel = require(__pathSchemas)[databaseConfig.col_users];
const NotFound = require(__pathHelper + "error");

module.exports = {
  listUserGrants: (params, options = null) => {
    const objWhere = {};
    const order = [[params.sortField, params.sortType]];
    if (params.filterKey && params.filterValue.length > 0) {
      objWhere[params.filterKey] = { $in: params.filterValue };
    }
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return userGrantsModel.findAll({
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
  getUserGrantsById: (userGrantId, options = null) => {
    return userGrantsModel.findByPk(userGrantId).then(userGrant => {
      if (userGrant) {
        return userGrant;
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  countUserGrants: params => {
    const objWhere = {};
    if (params.filterKey && params.filterValue.length > 0) {
      objWhere[params.filterKey] = { $in: params.filterValue };
    }
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return userGrantsModel.count({
      where: objWhere
    });
  },
  deleteUserGrants: async (userGrantId, options = null) => {
    if (options.task === "delete-one") {
      const userGrant = await userGrantsModel
        .findByPk(userGrantId)
        .then(userGrant => {
          if (userGrant) {
            return userGrant;
          }
          throw new NotFound("admin.layout.NOT_BE_BOUND");
        });
      await userGrantsModel.destroy({ where: { id: userGrantId } });
      return userGrant;
    } else if (options.task === "delete-many") {
      const userGrants = await userGrantsModel
        .findAll({ where: { id: userGrantId } })
        .then(userGrants => {
          if (userGrants.length > 0) {
            return userGrants;
          }
          throw new NotFound("admin.layout.NOT_BE_BOUND");
        });
      await userGrantsModel.destroy({ where: { id: userGrantId } });
      return userGrants;
    }
  },
  saveUserGrant: async (userGrant, userGrantId, options = null) => {
    const record = await module.exports.getRecordByTableAndRecordId(
      userGrant.tableName,
      userGrant.recordId
    );
    if (record) {
      if (options.task === "update") {
        const existuserGrant = await module.exports.getUserGrantByIdUserIdRecordIdTableName(
          userGrant.userId,
          userGrant.recordId,
          userGrantId,
          userGrant.tableName
        );
        if (!existuserGrant) {
          return userGrantsModel.findByPk(userGrantId).then(userGrantUpdate => {
            if (userGrantUpdate) {
              return userGrantUpdate.update(userGrant);
            }
            throw new NotFound("admin.layout.NOT_BE_BOUND");
          });
        }
        throw new NotFound("admin.layout.ROLE_GRANT_AREADY_EXIST");
      } else if (options.task === "create") {
        const existuserGrant = await module.exports.getUserGrantByRecordIdTableName(
          userGrant.userId,
          userGrant.recordId,
          userGrant.tableName
        );
        if (!existuserGrant) {
          return userGrantsModel.create(userGrant);
        }
        throw new NotFound("admin.layout.ROLE_GRANT_AREADY_EXIST");
      }
    }
    throw new NotFound("admin.layout.RECORD_ID_NOT_EXIST");
  },
  updateAction: (userGrantId, actionKey) => {
    return userGrantsModel.findByPk(userGrantId).then(userGrantUpdate => {
      if (userGrantUpdate) {
        return userGrantUpdate.update({
          [actionKey]: !userGrantUpdate[actionKey]
        });
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  getUserGrantByRecordIdTableName: (userId, recordId, tableName) => {
    return userGrantsModel.findOne({
      where: {
        userId,
        recordId,
        tableName
      }
    });
  },
  getRecordByTableAndRecordId: (tableName, recordId) => {
    const tableModel = require(__pathSchemas)[tableName];
    return tableModel.findByPk(recordId);
  },
  getUserGrantByIdUserIdRecordIdTableName: (
    userId,
    recordId,
    userGrantId,
    tableName
  ) => {
    const objWhere = { userId, recordId, tableName };
    if (userGrantId) {
      objWhere.id = { $ne: userGrantId };
    }
    return userGrantsModel.findOne({
      where: objWhere
    });
  }
};
