import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SearchNavigator from './src/navigations/SearchNavigator';
import useLocation from './src/hooks/useLocation';
import useLocationForecast from './src/hooks/useLocationForecast';
import Offline from './src/components/Offline';

function App(props) {
  return (
    <>
      <Offline />
      <NavigationContainer>
        <SearchNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
