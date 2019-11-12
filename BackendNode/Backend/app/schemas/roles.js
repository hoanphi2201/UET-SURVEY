module.exports = (sequelize, Sequelize) => {
  const role = sequelize.define(databaseConfig.col_roles, {
    id: {
      type: Sequelize.UUIDV4,
      primaryKey: true,
      autoIncrement: true
    },
    roleAcp: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  role.associate = function(models) {
    role.hasMany(models.users);
  };
  return role;
};
