module.exports = (sequelize, Sequelize) => {
  const survey_collector = sequelize.define(
    databaseConfig.col_survey_collectors,
    {
      id: {
        type: Sequelize.UUIDV4,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      surveyFormId: {
        type: Sequelize.UUIDV4,
        references: {
          model: databaseConfig.col_survey_forms,
          key: "id"
        },
        allowNull: false
      },
      userId: {
        type: Sequelize.UUIDV4,
        references: {
          model: databaseConfig.col_users,
          key: "id"
        },
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM,
        values: ["WEBLINK", "EMAIL"],
        allowNull: false,
        defaultValue: "WEBLINK"
      },
      status: {
        type: Sequelize.ENUM,
        values: ["OPEN", "CLOSED"],
        allowNull: false,
        defaultValue: "OPEN"
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      thankYouMessage: {
        type: Sequelize.STRING,
        defaultValue: "Thank you for completing our survey!"
      },
      allowMultipleResponses: {
        // Cho phép người trả lời thực hiện khảo sát nhiều lần từ cùng một trình duyệt trên cùng một máy tính. Không có sẵn cho người thu thập email
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      responseLimit: {
        //Đặt bộ thu đóng lại sau khi số lượng phản hồi đã chỉ định được thu thập
        type: Sequelize.NUMBER
      },
      closeDate: {
        type: Sequelize.DATE
      },
      displaySurveyResults: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      passwordEnabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      password: {
        // Đặt mật khẩu để hạn chế quyền truy cập vào khảo sát của bạn
        type: Sequelize.STRING
      },
      closedMessage: {
        type: Sequelize.STRING
      },
      anonymousType: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      closeDateEnabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      responseLimitEnabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      passwordLabel: {
        type: Sequelize.STRING
      },
      passwordRequiredMessage: {
        type: Sequelize.STRING
      },
      passwordRequiredErrorMessage: {
        type: Sequelize.STRING
      }
    }
  );
  survey_collector.associate = function(models) {
    survey_collector.belongsTo(models.survey_forms, { as: "surveyForm" });
    survey_collector.belongsTo(models.users);
    survey_collector.hasMany(models.survey_responses);
  };
  return survey_collector;
};
