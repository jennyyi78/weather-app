const getWeather = async (location) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4eab9c5e984dcd0a2d0ceaad08901dda`, { mode: 'cors' });
  const weatherData = await response.json();
  return weatherData;
};

export default getWeather;
