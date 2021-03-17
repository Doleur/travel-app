import axios from 'axios';

export const httpTravel = axios.create({
  baseURL: 'https://rss-travel-app-api.herokuapp.com/travel-api',
  headers: {
    'Content-type': 'application/json'
  }
});

export const httpWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data',
  headers: {
    'Content-type': 'application/json'
  }
});

export const httpCurrency = axios.create({
  baseURL: 'https://v6.exchangerate-api.com/v6',
  headers: {
    'Content-type': 'application/json'
  }
});
