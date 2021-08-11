import {useNetInfo} from '@react-native-community/netinfo';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import AppText from './AppText';
import colors from '../config/colors';

function Offline(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === null)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: getStatusBarHeight() + 20,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
  },
});
export default Offline;
