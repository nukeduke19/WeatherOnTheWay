import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from 'react-native';

import SearchIcon from '../../assets/search.svg';

import AppText from '../components/AppText';
import Readings from '../components/Readings';
import colors from '../config/colors';
import useAssets from './../hooks/useAssets';
import SearchBox from './../components/SearchBox';

function WeatherScreen({
  city,
  temperature,
  weatherType,
  wind,
  rain,
  humidity,
  Carousel,
  onPress,
  SearchBox,
}) {
  var date = new Date();
  const {imageUri, IconName} = useAssets(weatherType);

  return (
    <ImageBackground source={imageUri} style={styles.background}>
      <View style={styles.container}>
        {onPress && (
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.searchIcon}>
              <SearchIcon width={24} height={24} fill="#fff" />
            </View>
          </TouchableWithoutFeedback>
        )}
        {SearchBox}
        {Carousel && (
          <View style={styles.indiactorContainer}>
            <Carousel />
          </View>
        )}

        <View style={styles.locationDetails}>
          <AppText style={styles.city}>{city}</AppText>
          <AppText style={styles.date}>{date.toString()}</AppText>
        </View>

        <View>
          <AppText style={styles.temperature}>
            {Math.ceil(temperature - 273)}°C
          </AppText>
          <View style={styles.weatherTypeContainer}>
            {IconName && <IconName width={34} height={34} fill="#fff" />}
            <AppText style={styles.weatherType}>{weatherType}</AppText>
          </View>
        </View>

        <View style={styles.seperator} />

        <View style={styles.detailsContainer}>
          <Readings
            title="Wind"
            value={Math.round(wind * 3.6 * 10) / 10}
            unit="km/h"
            backgroundColor={colors.greenCyan}
          />
          <Readings
            title="Rain"
            value={rain}
            unit="%"
            backgroundColor={colors.red}
          />
          <Readings
            title="Humidity"
            value={humidity}
            unit="%"
            backgroundColor={colors.red}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  searchIcon: {
    marginTop: 15,
    marginBottom: 20,
  },
  indiactorContainer: {
    marginBottom: 20,
  },
  locationDetails: {
    flex: 1,
  },
  city: {
    fontSize: 30,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  date: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    fontSize: 15,
  },
  temperature: {
    fontSize: 85,
    fontFamily: 'Lato-Light',
  },
  weatherTypeContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  weatherType: {
    fontFamily: 'Lato-Regular',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  seperator: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: '100%',
    height: 2,
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
});
export default WeatherScreen;
