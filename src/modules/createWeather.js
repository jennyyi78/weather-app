const createWeather = function Weather(city, country, status, description, temp, humidity, wind) {
  const kelvinToFahrenheit = function convert(tempKelvin) {
    const tempFahrenheit = (tempKelvin - 273.15) * (9 / 5) + 32;
    return tempFahrenheit.toFixed(2);
  };

  return {
    city,
    country,
    status,
    description,
    temp: kelvinToFahrenheit(temp),
    humidity,
    wind,
  };
};

export default createWeather;
