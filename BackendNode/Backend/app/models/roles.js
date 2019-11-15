"use strict";
const rolesModel = require(__pathSchemas)[databaseConfig.col_roles];
const NotFound = require(__pathHelper + "error");

module.exports = {
  listAllRoles: (params, options = null) => {
    return rolesModel.findAll({
      attributes: ["id", "name"]
    });
  },
  listRoles: (params, options = null) => {
    const objWhere = {};
    const order = [[params.sortField, params.sortType]];
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return rolesModel.findAll({
      where: objWhere,
      order: order,
      limit: params.paging.pageSize,
      offset: (params.paging.page - 1) * params.paging.pageSize
    });
  },
  getRolesById: (roleId, options = null) => {
    return rolesModel.findByPk(roleId).then(role => {
      if (role) {
        return role;
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  changeRoleAcp: (roleId, options = null) => {
    return rolesModel.findByPk(roleId).then(roleUpdate => {
      if (roleUpdate) {
        return roleUpdate.update({ roleAcp: !roleUpdate.roleAcp });
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  countRoles: params => {
    let objWhere = {};
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return rolesModel.count({
      where: objWhere
    });
  },
  deleteRoles: async (roleId, options = null) => {
    if (options.task === "delete-one") {
      const role = await rolesModel.findByPk(roleId).then(role => {
        if (role) {
          return role;
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
      await rolesModel.destroy({ where: { id: roleId } });
      return role;
    } else if (options.task === "delete-many") {
      const roles = await rolesModel.findAll({
          where: { id: roleId }
        }).then(roles => {
          if (roles.length > 0) {
            return roles;
          }
          throw new NotFound("admin.layout.NOT_BE_BOUND");
        });
      await rolesModel.destroy({ where: { id: roleId } });
      return roles;
    }
  },
  saveRole: async (role, roleId = null, options = null) => {
    if (options.task === "update") {
      const existRole = await module.exports.getRoleByNameAndId(
        role.name,
        roleId
      );
      if (!existRole) {
        return rolesModel.findByPk(roleId).then(roleUpdate => {
          if (roleUpdate) {
            return roleUpdate.update(role);
          }
          throw new NotFound("admin.layout.NOT_BE_BOUND");
        });
      } else {
        throw new NotFound("admin.layout.ROLE_AREADY_EXIST");
      }
    } else if (options.task === "create") {
      const existRole = await module.exports.getRoleByNameAndId(role.name);
      if (!existRole) {
        return rolesModel.create(role);
      } else {
        throw new NotFound("admin.layout.ROLE_AREADY_EXIST");
      }
    }
  },
  getRoleByNameAndId: (name, roleId) => {
    const objWhere = { name: name };
    if (roleId) {
      objWhere.id = { $ne: roleId };
    }
    return rolesModel.findOne({
      where: objWhere
    });
  }
};
