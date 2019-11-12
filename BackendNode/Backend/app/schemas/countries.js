module.exports = (sequelize, Sequelize) => {
  const country = sequelize.define(databaseConfig.col_countries, {
    id: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sortname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phonecode: {
      type: Sequelize.NUMBER,
      allowNull: false
    }
  });
  return country;
};
