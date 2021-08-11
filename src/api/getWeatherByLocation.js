import client from './Client';

const getWeatherByLocation = (latitude, longitude) => {
  const endpoint = `/weather?lat=${latitude}&lon=${longitude}`;
  return client.get(endpoint);
};

export default {getWeatherByLocation};
