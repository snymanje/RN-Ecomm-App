import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
// eslint-disable-next-line camelcase
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
// eslint-disable-next-line camelcase
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import * as firebase from 'firebase/app';

import { Navigation } from './src/infrastructure/navigation';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

import { theme } from './src/infrastructure/theme';

const firebaseConfig = {
  apiKey: 'AIzaSyCFMgc3LgZunHc0wB4p9tOl4shgVDc1nvY',
  authDomain: 'mealstogo-e62e3.firebaseapp.com',
  projectId: 'mealstogo-e62e3',
  storageBucket: 'mealstogo-e62e3.appspot.com',
  messagingSenderId: '462219834253',
  appId: '1:462219834253:web:8f7592a5defebfa35003c4',
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
