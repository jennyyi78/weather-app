import getWeather from './getWeather';
import processWeather from './processWeather';

const displayContent = () => {
  const displayWeather = (location) => {
    getWeather(location).then((weatherData) => {
      const weatherObject = processWeather(weatherData);
      console.log(weatherObject);
    });
  };

  const setEventListeners = function setListeners() {
    const submitButton = document.querySelector('.submit-button');
    const locationInput = document.querySelector('.location-input');
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(locationInput.value);
      displayWeather(locationInput.value);
    });
  };

  setEventListeners();
};

export default displayContent;
