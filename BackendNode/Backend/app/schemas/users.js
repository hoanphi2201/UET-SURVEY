const bcrypt = require("bcrypt-nodejs");
module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(databaseConfig.col_users, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    lastName: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    userName: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    roleId: {
      type: Sequelize.UUIDV4,
      references: {
        model: databaseConfig.col_roles,
        key: "id"
      },
      allowNull: false
    },
    jobRole: {
      type: Sequelize.STRING
    },
    jobLevel: {
      type: Sequelize.STRING
    },
    organization: {
      type: Sequelize.JSON
    },
    accountComplete: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  });
  user.prototype.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  user.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  user.associate = models => {
    user.belongsTo(models.roles, { foreignKey: "roleId" });
  };
  return user;
};
