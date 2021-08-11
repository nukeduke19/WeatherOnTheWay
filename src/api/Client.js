import {create} from 'apisauce';
import key from '../config/Settings';
// const API_KEY = '593e9e42aded074c67eefd1078129ea4';
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API_key}

const apiClient = create({
  baseURL: `https://api.openweathermap.org/data/2.5`,
  headers: {
    'X-API-KEY': key,
  },
});

export default apiClient;
