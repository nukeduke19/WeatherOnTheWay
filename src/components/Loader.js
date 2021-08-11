import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  View,
} from 'react-native';

function Loader({visible = false}) {
  if (!visible) return null;

  return (
    <ImageBackground
      source={require('../../assets/Loader.jpg')}
      resizeMode="cover"
      style={styles.background}>
      <ActivityIndicator
        color="#1ca0d9"
        size={60}
        style={styles.activityIndicator}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
});
export default Loader;
