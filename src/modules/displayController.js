import getWeather from './getWeather';
import createElement from './createElement';
import processWeather from './processWeather';

const displayContent = () => {
  const weatherPanel = document.querySelector('.weather-panel');

  const displayErrorMessage = () => {
    const errorMessage = createElement('div', '', 'error-container');
    const errorText = createElement('p', 'Location was not Found!', 'title-text');
    errorMessage.appendChild(errorText);
    weatherPanel.appendChild(errorMessage);
  };

  const displayWeather = (location) => {
    getWeather(location).then((weatherData) => {
      if (weatherData.cod !== 200) {
        displayErrorMessage();
      } else {
        const weatherObject = processWeather(weatherData);

        const locationContainer = createElement('div', '', 'location-container');
        const cityText = createElement('p', weatherObject.city, 'title-text');
        const countryText = createElement('p', weatherObject.country, 'sub-text');

        locationContainer.appendChild(cityText);
        locationContainer.appendChild(countryText);
        weatherPanel.appendChild(locationContainer);

        const statusContainer = createElement('div', '', 'status-container');
        const statusText = createElement('p', weatherObject.status, 'title-text');
        const descriptionText = createElement('p', weatherObject.description, 'sub-text');

        statusContainer.appendChild(statusText);
        statusContainer.appendChild(descriptionText);
        weatherPanel.appendChild(statusContainer);

        const tempContainer = createElement('div', '', 'temp-container');
        const tempText = createElement('p', `${weatherObject.temp}°F`, 'temp-text');

        tempContainer.appendChild(tempText);
        weatherPanel.appendChild(tempContainer);

        const miscContainer = createElement('div', '', 'misc-container');
        const humidText = createElement('p', `Humidity: ${weatherObject.humidity}%`, 'sub-text');
        const windText = createElement('p', `Wind: ${weatherObject.wind} m/s`, 'sub-text');

        miscContainer.appendChild(humidText);
        miscContainer.appendChild(windText);
        weatherPanel.appendChild(miscContainer);
      }
    });
  };

  const clearWeather = () => {
    weatherPanel.textContent = '';
  };

  const setEventListeners = function setListeners() {
    const submitButton = document.querySelector('.submit-button');
    const locationInput = document.querySelector('.location-input');
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (weatherPanel.classList.contains('hide-panel')) {
        weatherPanel.classList.toggle('hide-panel');
      }
      clearWeather();
      displayWeather(locationInput.value);
    });
  };

  setEventListeners();
};

export default displayContent;
