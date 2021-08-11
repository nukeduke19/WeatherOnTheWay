import React, {useState, useEffect} from 'react';
import {} from 'react-native';

import SearchBox from './../components/SearchBox';
import weatherByCitiesApi from '../api/getWeatherByCities';
import useApi from './../hooks/useApi';
import WeatherScreen from './WeatherScreen';
import Loader from '../components/Loader';
import AppText from '../components/AppText';
import NotFound from '../components/NotFound';

function SearchScreen({route}) {
  const [cityName, setCityName] = useState(route.params);

  const getDataApi = useApi(weatherByCitiesApi.getWeatherByCities);
  useEffect(() => getDataApi.request(cityName), [cityName]);

  if (getDataApi.data.cod === '404')
    return (
      <>
        <Loader visible={getDataApi.loading} />
        <NotFound
          message={getDataApi.data.message}
          cityToBeSearched={cityName}
          onValueChange={city => setCityName(city)}
        />
      </>
    );

  let listing, city;
  if (getDataApi.data.cod === 200) {
    listing = getDataApi.data;

    return (
      <>
        <Loader visible={getDataApi.loading} />
        <WeatherScreen
          city={listing.name}
          temperature={listing.main.temp}
          weatherType={listing.weather[0].description}
          wind={listing.wind.speed}
          rain={listing.clouds.all}
          humidity={listing.main.humidity}
          SearchBox={<SearchBox onChange={city => setCityName(city)} />}
        />
      </>
    );
  }
  return <Loader visible={getDataApi.loading} />;
}

export default SearchScreen;
