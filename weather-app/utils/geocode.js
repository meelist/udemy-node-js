const request = require("postman-request");
const tokens = require("../tokens");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${tokens.mapbox}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the location service!");
    } else if (body.message) {
      callback(body.message);
    } else if (body.features.length === 0) {
      callback("No results for given location");
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
