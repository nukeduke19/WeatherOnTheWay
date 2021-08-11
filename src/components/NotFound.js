import React from 'react';
import {StyleSheet, ImageBackground, View, Alert} from 'react-native';
import {onChange} from 'react-native-reanimated';
import {useState} from 'react/cjs/react.development';
import AppText from './AppText';
import SearchBox from './SearchBox';

function NotFound({message, cityToBeSearched, onValueChange}) {
  const [city, setCity] = useState(cityToBeSearched);

  const validate = enteredCity => {
    if (!enteredCity) {
      return Alert.alert('Empty', 'Please type city name !');
    }
    onValueChange(enteredCity);
  };

  return (
    <ImageBackground
      source={require('../../assets/NotFound.jpg')}
      style={styles.background}>
      <AppText style={styles.text}>{message}</AppText>
      <AppText style={styles.text}>Please try a different city !</AppText>
      <View style={styles.searchContainer}>
        <SearchBox
          onChangeText={text => setCity(text)}
          onSubmitEditing={e => validate(e.nativeEvent.text)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
});
export default NotFound;
