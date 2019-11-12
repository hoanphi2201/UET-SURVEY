module.exports = (sequelize, Sequelize) => {
  const survey_recipient = sequelize.define(
    databaseConfig.col_survey_recipients,
    {
      id: {
        type: Sequelize.UUIDV4,
        primaryKey: true,
        autoIncrement: true
      },
      surveyCollectorId: {
        type: Sequelize.UUIDV4,
        references: {
          model: databaseConfig.col_survey_collectors,
          key: "id"
        },
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mailStatus: {
        type: Sequelize.ENUM,
        values: ["SENT", "NOT_SENT", "PROCESSING"],
        allowNull: false,
        defaultValue: "PROCESSING"
      }
    }
  );
  survey_recipient.associate = function(models) {
    survey_recipient.belongsTo(models.survey_collectors);
  };
  return survey_recipient;
};
