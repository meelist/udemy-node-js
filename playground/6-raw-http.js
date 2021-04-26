const http = require("http");
const tokens = require("../weather-app/tokens");

const url = `http://api.weatherstack.com/current?access_key=${tokens.weather}&query=55.75583,37.61778&units=s`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error ", error);
});

request.end();
