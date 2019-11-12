module.exports = (sequelize, Sequelize) => {
  const survey_response = sequelize.define(
    databaseConfig.col_survey_responses,
    {
      id: {
        type: Sequelize.UUIDV4,
        primaryKey: true,
        autoIncrement: true
      },
      surveyFormId: {
        type: Sequelize.UUIDV4,
        references: {
          model: databaseConfig.col_survey_forms,
          key: "id"
        },
        allowNull: false
      },
      surveyCollectorId: {
        type: Sequelize.UUIDV4,
        references: {
          model: databaseConfig.col_survey_collectors,
          key: "id"
        },
        allowNull: false
      },
      totalTime: {
        type: Sequelize.NUMBER,
        allowNull: false,
        defaultValue: 0
      },
      ipAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      json: {
        type: Sequelize.JSON,
        allowNull: true
      },
      geoLocation: {
        type: Sequelize.JSON
      }
    }
  );
  survey_response.associate = function(models) {
    survey_response.belongsTo(models.survey_forms);
    survey_response.belongsTo(models.survey_collectors);
  };
  return survey_response;
};
