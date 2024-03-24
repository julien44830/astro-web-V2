const { OpenWeatherAPI } = require("openweather-api-node");

let weather = new OpenWeatherAPI({
    key: "65f81dbcf0fc0fb91791beb522d9ffc7",
    units: "metric"
});

const city ="saint jean de boiseau";

weather.setLocationByName(city);

weather.getCurrent().then(data => {
    console.log(`La température actuelle à ${city} est de : ${data.weather.temp.cur}\u00B0C`);
});
