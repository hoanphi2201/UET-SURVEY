module.exports = (sequelize, Sequelize) => {
  const survey_folder = sequelize.define(databaseConfig.col_survey_folders, {
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
    title: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  survey_folder.associate = function(models) {
    survey_folder.belongsTo(models.users);
    survey_folder.hasMany(models.survey_forms);
  };
  return survey_folder;
};
