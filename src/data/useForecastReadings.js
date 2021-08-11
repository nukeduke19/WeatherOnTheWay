// import {useEffect} from 'react';
// import weatherDataApi from '../api/weatherData';
// import useApi from './useApi';

// export default useForecastReadings = () => {
//   const panjimDataApi = useApi(weatherDataApi.getWeatherData);
//   const mumbaiDataApi = useApi(weatherDataApi.getWeatherData);
//   const delhiDataApi = useApi(weatherDataApi.getWeatherData);
//   const londonDataApi = useApi(weatherDataApi.getWeatherData);
//   const sydneyDataApi = useApi(weatherDataApi.getWeatherData);
//   const newyorkDataApi = useApi(weatherDataApi.getWeatherData);
//   const parisDataApi = useApi(weatherDataApi.getWeatherData);
//   useEffect(() => {
//     panjimDataApi.request('Panjim');
//     mumbaiDataApi.request('Mumbai');
//     delhiDataApi.request('Delhi');
//     londonDataApi.request('london');
//     sydneyDataApi.request('sydney');
//     newyorkDataApi.request('new york');
//     parisDataApi.request('paris');
//   }, []);
//   if (
//     panjimDataApi.data.length !== 0 &&
//     mumbaiDataApi.data.length !== 0 &&
//     delhiDataApi.data.length !== 0 &&
//     londonDataApi.data.length !== 0 &&
//     sydneyDataApi.data.length !== 0 &&
//     newyorkDataApi.data.length !== 0 &&
//     parisDataApi.data.length !== 0
//   ) {
//     const array = [
//       panjimDataApi.data,
//       mumbaiDataApi.data,
//       delhiDataApi.data,
//       londonDataApi.data,
//       sydneyDataApi.data,
//       newyorkDataApi.data,
//       parisDataApi.data,
//     ];
//     return array;
//   }

// };
