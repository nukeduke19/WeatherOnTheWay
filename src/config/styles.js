import Colors from './colors';
import {Platform} from 'react-native';
export default {
  Colors,
  text: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenier',
  },
};
