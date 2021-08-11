import SunIcon from '../../assets/sun.svg';
import CloudIcon from '../../assets/cloudy.svg';
import MoonIcon from '../../assets/moon.svg';
import RainIcon from '../../assets/rain.svg';
import FogIcon from '../../assets/fog.svg';
import HazeIcon from '../../assets/cloud-haze.svg';
import SnowIcon from '../../assets/cloud-snow.svg';
import ThunderIcon from '../../assets/thunderstorm.svg';
import FewClouds from '../../assets/fewClouds.svg';
import MistIcon from '../../assets/mist.svg';

export default useAssets = weatherType => {
  let imageUri, IconName;
  if (weatherType === 'clear sky') {
    imageUri = require('../../assets/sunny.jpg');
    IconName = SunIcon;
  } else if (weatherType === 'Night') {
    imageUri = require('../../assets/night2.jpg');
    IconName = MoonIcon;
  } else if (weatherType.includes('rain') || weatherType.includes('drizzle')) {
    imageUri = require('../../assets/rainy.jpg');
    IconName = RainIcon;
  } else if (
    weatherType === 'few clouds' ||
    weatherType === 'overcast clouds'
  ) {
    imageUri = require('../../assets/cloudy.jpeg');
    IconName = CloudIcon;
  } else if (
    weatherType === 'scattered clouds' ||
    weatherType === 'broken clouds'
  ) {
    imageUri = require('../../assets/scatteredClouds.jpg');
    IconName = FewClouds;
  } else if (weatherType === 'mist') {
    imageUri = require('../../assets/mist.jpg');
    IconName = MistIcon;
  } else if (weatherType === 'haze') {
    imageUri = require('../../assets/haze.jpg');
    IconName = HazeIcon;
  } else if (weatherType === 'fog' || weatherType === 'smoke') {
    imageUri = require('../../assets/fog.jpg');
    IconName = FogIcon;
  } else if (weatherType === 'snow') {
    imageUri = require('../../assets/snow.jpg');
    IconName = SnowIcon;
  } else if (weatherType === 'thunderstorm') {
    imageUri = require('../../assets/thunderstorm.jpg');
    IconName = ThunderIcon;
  } else {
    imageUri = require('../../assets/NotFound.jpg');
  }

  return {imageUri, IconName};
};
