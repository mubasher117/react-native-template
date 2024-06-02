import React from 'react';
import {useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './NavigationStack';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}
