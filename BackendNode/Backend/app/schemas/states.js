module.exports = (sequelize, Sequelize) => {
  const state = sequelize.define(databaseConfig.col_states, {
    id: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    countryId: {
      type: Sequelize.NUMBER,
      allowNull: false,
      references: {
        model: databaseConfig.col_countries,
        key: "id"
      }
    }
  });
  state.associate = function(models) {
    state.belongsTo(models.countries);
  };
  return state;
};
