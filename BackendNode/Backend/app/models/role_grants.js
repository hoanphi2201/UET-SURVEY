"use strict";
const roleGrantsModel = require(__pathSchemas)[databaseConfig.col_role_grants];
const rolesModel = require(__pathSchemas)[databaseConfig.col_roles];
const NotFound = require(__pathHelper + "error");

module.exports = {
  listRoleGrants: (params, options = null) => {
    const objWhere = {};
    const order = [[params.sortField, params.sortType]];
    if (params.filterKey && params.filterValue.length > 0) {
      objWhere[params.filterKey] = { $in: params.filterValue };
    }
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return roleGrantsModel.findAll({
      where: objWhere,
      order: order,
      limit: params.paging.pageSize,
      offset: (params.paging.page - 1) * params.paging.pageSize,
      include: [
        {
          model: rolesModel,
          attributes: ["id", "name"]
        }
      ]
    });
  },
  getRoleGrantsById: (roleGrantId, options = null) => {
    return roleGrantsModel.findByPk(roleGrantId).then(roleGrant => {
      if (roleGrant) {
        return roleGrant;
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  countRoleGrants: params => {
    const objWhere = {};
    if (params.filterKey && params.filterValue.length > 0) {
      objWhere[params.filterKey] = { $in: params.filterValue };
    }
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return roleGrantsModel.count({
      where: objWhere
    });
  },
  deleteRoleGrants: async (roleGrantId, options = null) => {
    if (options.task === "delete-one") {
      const roleGrant = await roleGrantsModel
        .findByPk(roleGrantId)
        .then(roleGrant => {
          if (roleGrant) {
            return roleGrant;
          }
          throw new NotFound("admin.layout.NOT_BE_BOUND");
        });
      await roleGrantsModel.destroy({ where: { id: roleGrantId } });
      return roleGrant;
    } else if (options.task === "delete-many") {
      const roleGrants = await roleGrantsModel
        .findAll({ where: { id: roleGrantId } })
        .then(roleGrants => {
          if (roleGrants.length > 0) {
            return roleGrants;
          }
          throw new NotFound("admin.layout.NOT_BE_BOUND");
        });
      await roleGrantsModel.destroy({ where: { id: roleGrantId } });
      return roleGrants;
    }
  },
  saveRoleGrant: async (roleGrant, roleGrantId, options = null) => {
    if (options.task === "update") {
      const existroleGrant = await module.exports.getRoleGrantByRoleTableAndId(
        roleGrant.roleId,
        roleGrant.tableName,
        roleGrantId
      );
      if (!existroleGrant) {
        return roleGrantsModel.findByPk(roleGrantId).then(roleGrantUpdate => {
          if (roleGrantUpdate) {
            return roleGrantUpdate.update(roleGrant);
          }
          throw new NotFound("admin.layout.NOT_BE_BOUND");
        });
      }
      throw new NotFound("admin.layout.ROLE_GRANT_AREADY_EXIST");
    } else if (options.task === "create") {
      const existroleGrant = await module.exports.getRoleGrantByRoleTable(
        roleGrant.roleId,
        roleGrant.tableName
      );
      if (!existroleGrant) {
        return roleGrantsModel.create(roleGrant);
      }
      throw new NotFound("admin.layout.ROLE_GRANT_AREADY_EXIST");
    }
  },
  updateAction: (roleGrantId, actionKey) => {
    return roleGrantsModel.findByPk(roleGrantId).then(roleGrantUpdate => {
      if (roleGrantUpdate) {
        return roleGrantUpdate.update({
          [actionKey]: !roleGrantUpdate[actionKey]
        });
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  getRoleGrantByRoleTable: (roleId, tableName) => {
    return roleGrantsModel.findOne({
      where: {
        roleId,
        tableName
      }
    });
  },
  getRoleGrantByRoleTableAndId: (roleId, tableName, roleGrantId) => {
    const objWhere = { roleId, tableName };
    if (roleGrantId) {
      objWhere.id = { $ne: roleGrantId };
    }
    return roleGrantsModel.findOne({
      where: objWhere
    });
  }
};
