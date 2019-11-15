"use strict";
const express = require("express");
const router = express.Router();
const citiesModel = require(__pathModels + "cities");
const paramsHelper = require(__pathHelper + "params");
const Response = require(__pathHelper + "response").Response;

router.get("/search", async (req, res, next) => {
  const cityName = paramsHelper.getParam(req.query, "cityName", "");
  const limit = paramsHelper.getParam(req.query, "limit", 50);
  await citiesModel.searchCitiesByName(cityName, { limit }).then(cities => {
    res.status(200).json(new Response(false, 200, "success", "Success", cities));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});
router.get("/:cityId", async (req, res, next) => {
  const cityId = paramsHelper.getParam(req.params, "cityId", "");
  await citiesModel.getCityById(cityId).then(city => {
    res.status(200).json(new Response(false, 200, "success", "Success", [city]));
  }).catch(error =>
    res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
  );
});
module.exports = router;
