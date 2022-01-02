import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { RestaurantScreen } from './src/features/restaurant/screens/RestaurantScreen';

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
