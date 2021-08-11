import React, {useEffect, useState} from 'react';
import useLocation from './useLocation';
import getWeatherByLocationApi from '../api/getWeatherByLocation';

export default useLocationForecast = () => {
  const {Latitude, Longitude} = useLocation();

  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [weatherType, setWeatherType] = useState(null);
  const [wind, setWind] = useState(null);
  const [rain, setRain] = useState(null);
  const [humidity, setHumidity] = useState(null);

  const getLocationWeather = async () => {
    if (Latitude && Longitude) {
      // console.log('Latitude', Latitude);
      // console.log('Longitude', Longitude);

      const response = await getWeatherByLocationApi.getWeatherByLocation(
        Latitude,
        Longitude,
      );

      if (response.ok) {
        setCity(response.data.name);
        setTemperature(response.data.main.temp);
        setWeatherType(response.data.weather[0].description);
        setWind(response.data.wind.speed);
        setRain(response.data.clouds.all);
        setHumidity(response.data.main.humidity);
        // console.log('Location result', response.data);
      }
    }
  };

  getLocationWeather();
  if (temperature) {
    return {city, temperature, weatherType, wind, rain, humidity};
  }
};
