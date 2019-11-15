"use strict";
const citiesModel = require(__pathSchemas)[databaseConfig.col_cities];
const statesModel = require(__pathSchemas)[databaseConfig.col_states];
const countriesModel = require(__pathSchemas)[databaseConfig.col_countries];

module.exports = {
  searchCitiesByName: (cityName, options = null) => {
    return citiesModel.findAll({
      where: { name: { $like: `%${cityName}%` } },
      attributes: ["id", "name"],
      limit: options.limit,
      include: [
        {
          model: statesModel,
          attributes: ["id", "name"],
          include: [
            {
              model: countriesModel,
              attributes: ["id", "name"]
            }
          ]
        }
      ]
    });
  },
  getCityById: (cityId, options = null) => {
    return citiesModel.findByPk(cityId, {
      attributes: ["id", "name"],
      include: [
        {
          model: statesModel,
          attributes: ["id", "name"],
          include: [
            {
              model: countriesModel,
              attributes: ["id", "name"]
            }
          ]
        }
      ]
    }).then(city => {
      if (city) {
        return city;
      }
      throw new NotFound("admin.layout.NOT_BE_BOUND");
    });
  }
};
