const fetch = require("node-fetch");

const url = "https://danepubliczne.imgw.pl/api/data/synop";

const settings = { method: "Get" };

const weatherData = [];

const fetchData = () =>
  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      weatherData.push(json);
    });

exports.fetchData = fetchData;
exports.weatherData = weatherData;
