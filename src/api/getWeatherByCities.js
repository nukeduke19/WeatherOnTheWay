import client from './Client';

const getWeatherByCities = city => {
  const endpoint = `/weather?q=${city}`;
  return client.get(endpoint);
};

export default {getWeatherByCities};
