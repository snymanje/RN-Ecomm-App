import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurant/screens/RestaurantScreen';
import { RestaurantDetailScreen } from '../../features/restaurant/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => (
  <RestaurantStack.Navigator
    screenOptions={{
      ...TransitionPresets.ModalSlideFromBottomIOS,
      headerShown: false,
    }}
  >
    <RestaurantStack.Screen name="RestaurantsTab" component={RestaurantsScreen} />
    <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
  </RestaurantStack.Navigator>
);
