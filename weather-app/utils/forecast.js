const request = require("postman-request");
const tokens = require("../tokens");

const forecast = (lat, lng, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${tokens.weather}&query=${lat},${lng}&units=s`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather service!");
    } else if (body.error) {
      callback("Invalid input! Check your coordinates.");
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. Currently it's ${body.current.temperature} kelvin, but it feels like ${body.current.feelslike} kelvin.`
      );
    }
  });
};

module.exports = forecast;
