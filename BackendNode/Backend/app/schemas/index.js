"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__pathConfig + "config.json")[env];
const Op = Sequelize.Op;
config.operatorsAliases = {
  $like: Op.like,
  $ne: Op.ne,
  $in: Op.in
};
const sequelize = new Sequelize(
  config.database,
  config.userName,
  config.password,
  config
);
const db = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf(".") !== 0 && file !== "index.js";
  })
  .forEach(file => {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
