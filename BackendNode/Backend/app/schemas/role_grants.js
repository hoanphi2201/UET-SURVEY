module.exports = (sequelize, Sequelize) => {
  const role_grant = sequelize.define(databaseConfig.col_role_grants, {
    id: {
      type: Sequelize.UUIDV4,
      primaryKey: true,
      autoIncrement: true
    },
    roleId: {
      type: Sequelize.UUIDV4,
      references: {
        model: databaseConfig.col_roles,
        key: "id"
      },
      allowNull: false
    },
    tableName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    canViewAll: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    canSelfView: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    canInsert: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    canUpdate: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    canDelete: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
  role_grant.associate = function(models) {
    role_grant.belongsTo(models.roles);
  };
  return role_grant;
};
