module.exports = (sequelize, Sequelize) => {
  const survey_form = sequelize.define(databaseConfig.col_survey_forms, {
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
    surveyFolderId: {
      type: Sequelize.UUIDV4,
      references: {
        model: databaseConfig.col_survey_folders,
        key: "id"
      }
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.ENUM,
      values: ["DRAFT", "OPEN", "CLOSED"],
      allowNull: false,
      defaultValue: "DRAFT"
    },
    json: {
      type: Sequelize.JSON,
      allowNull: true
    },
    category: {
      type: Sequelize.NUMBER
    },
    isFavorite: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
  survey_form.associate = function(models) {
    survey_form.belongsTo(models.users);
    survey_form.belongsTo(models.survey_folders, { as: "surveyFolder" });
    survey_form.hasMany(models.survey_collectors);
    survey_form.hasMany(models.survey_responses);
  };
  return survey_form;
};
