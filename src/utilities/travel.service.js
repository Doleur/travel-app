import { httpTravel, httpWeather } from './http-common';

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
  return http.post('/auth/signin', params);
};

export const signUp = (params) => {
  return http.post('/auth/signup', params);
};
