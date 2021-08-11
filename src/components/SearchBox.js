import React, {useState} from 'react';

import {View, StyleSheet, TextInput, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../config/colors';

import LeftArrow from '../../assets/leftArrow.svg';

function SearchBox({onChange, ...otherProps}) {
  const navigation = useNavigation();
  const [city, setCity] = useState();

  const validate = enteredCity => {
    if (!enteredCity) {
      return Alert.alert('Empty', 'Please type city name !');
    }
    onChange(enteredCity);
  };

  return (
    <>
      <LeftArrow
        width={25}
        height={25}
        fill="#fff"
        onPress={navigation.goBack}
        style={styles.backIcon}
      />
      <TextInput
        placeholder="search a city"
        placeholderTextColor={'black'}
        onChangeText={text => setCity(text)}
        onSubmitEditing={e => validate(e.nativeEvent.text)}
        {...otherProps}
        style={styles.textInput}
      />
    </>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    marginRight: 20,
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255,.2)',
    marginTop: 10,
    marginBottom: 40,
    padding: 10,
    borderRadius: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
});
export default SearchBox;
