import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();
const SearchNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="home" component={HomeScreen} />
    <Stack.Screen name="search" component={SearchScreen} />
  </Stack.Navigator>
);

export default SearchNavigator;
