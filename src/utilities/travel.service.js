import http from './http-common';

export const getAllCountries = () => {
  return http.get('/countries');
};

export const getSpecificCountry = (id) => {
  return http.get(`/countries/${id}`);
};
