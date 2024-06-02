import React from 'react';

import {StyleSheet} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <SafeAreaProvider style={styles.safeAreaFlex}>
      <AppNavigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaFlex: {
    flex: 1,
    // backgroundColor: Theme.colors.primary,
  },
});
