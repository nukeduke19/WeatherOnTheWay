import {useEffect} from 'react';
import weatherByCitiesApi from '../api/getWeatherByCities';
import useApi from './useApi';

export default useForecastReadings = () => {
  const Cities = [
    'Panjim',
    'Mumbai',
    'Delhi',
    'London',
    'Sydney',
    'New York',
    'Paris',
  ];
  const DataApi = [];
  const array = [];

  for (let city of Cities) {
    DataApi[city] = useApi(weatherByCitiesApi.getWeatherByCities);
    DataApi.push(DataApi[city]);
  }

  useEffect(() => {
    for (let city of Cities) {
      DataApi[city].request(city);
    }
  }, []);

  for (let city of Cities) {
    if (DataApi[city].data.cod === 200) {
      array.push(DataApi[city].data);
    }
  }

  return array;
};
