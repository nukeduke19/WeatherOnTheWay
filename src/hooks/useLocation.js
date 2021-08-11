import * as Location from 'expo-location';
import {useState, useEffect} from 'react';

export default useLocation = () => {
  const [Latitude, setLatitude] = useState();
  const [Longitude, setLongitude] = useState();
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const {granted} = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {coords} = await Location.getCurrentPositionAsync();
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
    } catch (error) {
      console.log('Error in location', error);
    }
  };

  return {Latitude, Longitude};
};
