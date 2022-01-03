const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.forecastToken}&query=${latitude},${longitude}&units=m`;

  request({ url: url, json: true }, (error, response = {}) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (response.body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(undefined, {
        temperature: response.body.current.temperature,
        feelsLike: response.body.current.feelslike,
        description: response.body.current.weather_descriptions[0],
        precip: response.body.current.precip,
        wind: response.body.current.wind_speed,
        windDir: response.body.current.wind_dir,
      });
    }
  });
};

module.exports = forecast;
