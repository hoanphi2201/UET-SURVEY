module.exports = (sequelize, Sequelize) => {
  const city = sequelize.define(databaseConfig.col_cities, {
    id: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    stateId: {
      type: Sequelize.NUMBER,
      allowNull: false,
      references: {
        model: databaseConfig.col_states,
        key: "id"
      }
    }
  });
  city.associate = function(models) {
    city.belongsTo(models.states);
  };
  return city;
};
