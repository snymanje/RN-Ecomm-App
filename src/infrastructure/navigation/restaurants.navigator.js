import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { RestaurantScreen } from '../../features/restaurant/screens/RestaurantScreen';
import { RestaurantDetailScreen } from '../../features/restaurant/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => (
  <RestaurantStack.Navigator
    headerMode="none"
    screenOptions={
      Platform.OS === 'ios'
        ? {
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }
        : {
            ...TransitionPresets.BottomSheetAndroid,
          }
    }
  >
    <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
    <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
  </RestaurantStack.Navigator>
);
