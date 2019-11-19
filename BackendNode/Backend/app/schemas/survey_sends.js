module.exports = (sequelize, Sequelize) => {
    const survey_send = sequelize.define(databaseConfig.col_survey_sends, {
        id: {
            type: Sequelize.UUIDV4,
            primaryKey: true,
            autoIncrement: true
        },
        from: {
            type: Sequelize.UUIDV4,
            references: {
                model: databaseConfig.col_users,
                key: "id"
            },
            allowNull: false
        },
        to: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.ENUM,
            values: ["SEND_COPY", "TRANSFER"],
            allowNull: false,
            defaultValue: "SEND_COPY"
        },
        status: {
            type: Sequelize.ENUM,
            values: ["PENDING", "ACCEPT", "DENY"],
            allowNull: false,
            defaultValue: "PENDING"
        },
        surveyFormId: {
            type: Sequelize.UUIDV4,
            references: {
                model: databaseConfig.col_survey_forms,
                key: "id"
            },
            allowNull: false
        }
    });
    survey_send.associate = function (models) {
        survey_send.belongsTo(models.survey_forms, { as: "surveyForm" });
        survey_send.belongsTo(models.users, { foreignKey: "from" });
    };
    return survey_send;
};
