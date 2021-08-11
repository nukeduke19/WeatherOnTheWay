import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Readings({title, value, unit, backgroundColor}) {
  return (
    <View>
      <AppText style={styles.text}>{title}</AppText>
      <AppText style={styles.value}>{value}</AppText>
      <AppText style={styles.text}>{unit}</AppText>
      <View style={styles.infobar}>
        <View
          style={{
            width: `${(value / 100) * 100}%`,
            height: 5,
            backgroundColor,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  value: {
    fontSize: 24,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infobar: {
    width: 45,
    height: 5,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
});
export default Readings;
