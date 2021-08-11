import React, {useRef, useState, useEffect} from 'react';
import {
  FlatList,
  Animated,
  View,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import WeatherScreen from './WeatherScreen';
import Colors from '../config/colors';
import useForecastReadings from './../hooks/useForecastReadings';
import useLocationForecast from './../hooks/useLocationForecast';
import Loader from './../components/Loader';

function HomeScreen({navigation}) {
  const Forecasts = useForecastReadings();

  // console.log('Forecast', Forecasts);

  const LocationWeather = useLocationForecast();

  // console.log('Location weather', LocationWeather);

  const LocationWeatherScreen = () => {
    if (!LocationWeather || !LocationWeather.weatherType) return null;

    return (
      <WeatherScreen
        city={LocationWeather.city}
        temperature={LocationWeather.temperature}
        weatherType={LocationWeather.weatherType}
        wind={LocationWeather.wind}
        rain={LocationWeather.rain}
        humidity={LocationWeather.humidity}
        Carousel={CarouselIndicator}
      />
    );
  };

  //////////////////////////
  // console.log('Corousel count', Forecasts.length);
  const LocationResults = ['Your Location', ...Forecasts];
  // console.log('new carousel count', totalCities.length);

  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();

  const CarouselIndicator = () => (
    <View style={styles.carouselIndicator}>
      {LocationResults.map((LocationResult, index) => {
        const width = scrollX.interpolate({
          inputRange: [
            windowWidth * (index - 1),
            windowWidth * index,
            windowWidth * (index + 1),
          ],
          outputRange: [5, 12, 5],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View key={index} style={[styles.normalDot, {width}]} />
        );
      })}
    </View>
  );

  return (
    <FlatList
      data={Forecasts}
      keyExtractor={Forecast => Forecast.id.toString()}
      renderItem={({item}) => (
        <WeatherScreen
          city={item.name}
          temperature={item.main.temp}
          weatherType={item.weather[0].description}
          wind={item.wind.speed}
          rain={item.clouds.all}
          humidity={item.main.humidity}
          Carousel={CarouselIndicator}
          onPress={() => navigation.navigate('search', item.name)}
        />
      )}
      horizontal
      ListHeaderComponent={<LocationWeatherScreen />}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      scrollEventThrottle={1}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        {useNativeDriver: false},
      )}
    />
  );
}

const styles = StyleSheet.create({
  carouselIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  normalDot: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: Colors.white,
    marginHorizontal: 4,
  },
});
export default HomeScreen;
