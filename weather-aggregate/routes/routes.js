const express = require("express");
const router = express.Router();

const { weatherData } = require("../util/fetchData");

router.get("/", (req, res) => {
  res.render("index", {
    weatherData,
  });
  console.log(weatherData);
});

router.get("/city/:cityId", (req, res) => {
  const cityId = req.params.cityId;
  console.log(cityId);
  const cityData = [];
  weatherData.forEach((weatherArray) => {
    weatherArray.forEach((weatherStation) => {
      if (weatherStation.id_stacji == cityId) {
        cityData.push(weatherStation);
      }
    });
  });
  console.log(cityData);
  res.render("city", {
    weatherData,
    cityId,
    cityData,
  });
});

module.exports = router;
