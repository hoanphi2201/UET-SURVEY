module.exports = (sequelize, Sequelize) => {
  const user_grant = sequelize.define(databaseConfig.col_user_grants, {
    id: {
      type: Sequelize.UUIDV4,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.UUIDV4,
      references: {
        model: databaseConfig.col_users,
        key: "id"
      },
      allowNull: false
    },
    recordId: {
      type: Sequelize.UUIDV4,
      allowNull: false
    },
    tableName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    canView: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    canInsert: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    canUpdate: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    canDelete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  user_grant.associate = function(models) {
    user_grant.belongsTo(models.users);
  };
  return user_grant;
};
