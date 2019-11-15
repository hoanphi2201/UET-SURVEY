"use strict";
const usersModel = require(__pathSchemas)[databaseConfig.col_users];
const rolesModel = require(__pathSchemas)[databaseConfig.col_roles];
const fileHelper = require(__pathHelper + "file");
const uploadFolder = "public/uploads/users/";
const NotFound = require(__pathHelper + "error");

module.exports = {
  listUsers: (params, options = null) => {
    const objWhere = {};
    const order = [[params.sortField, params.sortType]];
    if (params.filterKey && params.filterValue.length > 0) {
      objWhere[params.filterKey] = { $in: params.filterValue };
    }
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return usersModel.findAll({
      where: objWhere,
      order: order,
      attributes: [
        "id", "firstName", "roleId", "lastName", "userName", "email", "updatedAt", "createdAt"
      ],
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
  getUsersById: (userId, options = null) => {
    return usersModel.findByPk(userId, {
      attributes: [
        "id", "firstName", "lastName", "userName", "email", "updatedAt", "createdAt"
      ]
    }).then(user => {
      if (user) {
        return user;
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  searchUsersByUserName: (userName, options = null) => {
    return usersModel.findAll({
      where: { userName: { $like: `%${userName}%` } },
      attributes: ["id", "userName"],
      limit: options.limit
    });
  },
  getUsersByUsername: (userName, options = null) => {
    return usersModel.findOne(
      { where: { userName } },
      {
        attributes: [
          "id", "userName", "email", "firstName", "lastName", "jobRole", "jobLevel"
        ]
      }
    ).then(user => {
      if (user) {
        return user;
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  countUsers: params => {
    let objWhere = {};
    if (params.filterKey && params.filterValue.length > 0) {
      objWhere[params.filterKey] = { $in: params.filterValue };
    }
    if (params.searchKey !== "" && params.searchValue !== "") {
      objWhere[params.searchKey] = { $like: `%${params.searchValue}%` };
    }
    return usersModel.count({
      where: objWhere
    });
  },
  changeRole: (params, options = null) => {
    return usersModel.findByPk(params.userId).then(user => {
      if (user) {
        return user.update({ roleId: params.roleId });
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  },
  deleteUsers: async (userId, options = null) => {
    if (options.task === "delete-one") {
      const user = await usersModel.findByPk(userId).then(user => {
        if (user) {
          fileHelper.remove(uploadFolder, user.avatar);
          return user;
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
      await usersModel.destroy({ where: { id: userId } });
      return user;
    } else if (options.task === "delete-many") {
      const users = await usersModel.findAll({
        where: { id: userId }
      }).then(users => {
        if (users.length > 0) {
          return users;
        }
        throw new NotFound("admin.layout.NOT_BE_BOUND");
      });
      await usersModel.destroy({ where: { id: userId } });
      return users;
    }
  },
  saveUser: async (user, userId = null, options = null) => {
    if (options.task == "update") {
      const existUser = await module.exports.getUserByUserNameAndId(
        user.userName,
        userId
      );
      if (!existUser) {
        return usersModel.findByPk(userId).then(userUpdate => {
          if (userUpdate) {
            const objUpdate = {
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              jobRole: user.jobRole,
              jobLevel: user.jobLevel,
              organization: user.organization,
              accountComplete: user.accountComplete
            };
            if (user.password && user.password !== "" && user.confirmPassword !== "" && user.confirmPassword === user.password) {
              objUpdate.password = usersModel.prototype.generateHash(
                user.password
              );
            }
            return userUpdate.update(objUpdate);
          } else {
            throw new NotFound("admin.layout.NOT_BE_BOUND");
          }
        });
      }
      throw new NotFound("admin.layout.USER_AREADY_EXIST");
    } else if (options.task == "create") {
      const existUser = await module.exports.getUserByUserName(user.userName);
      if (!existUser) {
        user.password = usersModel.prototype.generateHash(user.password);
        return usersModel.create(user);
      }
      throw new NotFound("admin.layout.USER_AREADY_EXIST");
    }
  },
  getUserByUserName: userName => {
    return usersModel.findOne({
      where: {
        userName
      }
    });
  },
  getUserByUserNameAndId: (userName, userId) => {
    const objWhere = { userName };
    if (userId) {
      objWhere.id = { $ne: userId };
    }
    return usersModel.findOne({
      where: objWhere
    });
  },
  compareUserLogin: userName => {
    return usersModel.findOne({
      where: {
        userName
      },
      include: [
        {
          model: rolesModel,
          attributes: ["id", "name"]
        }
      ]
    });
  }
};
