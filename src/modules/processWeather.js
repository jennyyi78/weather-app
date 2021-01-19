import createWeather from './createWeather';

const processWeather = (data) => {
  const weather = createWeather(data.name, data.sys.country, data.weather[0].main,
    data.weather[0].description, data.main.temp, data.main.humidity, data.wind.speed);
  return weather;
};

export default processWeather;
