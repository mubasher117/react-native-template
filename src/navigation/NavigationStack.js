import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash.js/Splash';
import MainScreen from '../screens/MainScreen/MainScreen';
import WeatherDetail from '../screens/WeatherDetail/WeatherDetail';

function NavigationStack() {
  const Stack = createNativeStackNavigator();

  const screens = {
    Splash: Splash,

    MainScreen: MainScreen,
    WeatherDetail: WeatherDetail,
  };

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      {Object.entries(screens).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
}

export default NavigationStack;
