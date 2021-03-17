import { httpTravel, httpWeather, httpCurrency } from './http-common';

export const getAllCountries = () => {
  return httpTravel.get('/countries');
};

export const getSpecificCountry = (id) => {
  return httpTravel.get(`/countries/${id}`);
};

export const getWeather = (city, lang) => {
  return httpWeather.get(
    `/2.5/weather?q=${city}&lang=${
      lang === 'by' ? 'ru' : lang
    }&appid=8ed9ee4cdef421b6f099391b87ce13ae&units=metric`
  );
};

export const signIn = (params) => {
  return httpTravel.post('/auth/signin', params);
};

export const signUp = (params) => {
  return httpTravel.post('/auth/signup', params);
};

export const getCurrency = (country) => {
  return httpCurrency.get(`/629895552814e26a8f06b35f/latest/${country}`);
};

export const getCurrentUser = (accessToken) => {
  return httpTravel.get('/auth/user', {
    headers: { 'x-access-token': accessToken }
  });
};

const wakeUpHeroku = () => {
  getAllCountries();
  setTimeout(wakeUpHeroku, 1740000);
};

wakeUpHeroku();
