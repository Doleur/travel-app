import axios from 'axios';

export default axios.create({
  baseURL: 'https://rss-travel-app-api.herokuapp.com/travel-api',
  headers: {
    'Content-type': 'application/json'
  }
});
