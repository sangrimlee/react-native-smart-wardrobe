import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AppNavigation from './AppNavigation';
import ItemStack from './ItemStack';
import RecommendationStack from './RecommendationStack';
import { LikeScreen } from '../Screens';
import { ItemAddForm } from '../Screens/ItemScreen';
import RecommendationDetail from '../Screens/RecoomendationScreen/RecommendationDetail';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: true }}
    >
      <Stack.Screen name="AppNavigation" component={AppNavigation} />
      <Stack.Screen name="ItemStack" component={ItemStack} />
      <Stack.Screen
        name="LikeScreen"
        component={LikeScreen}
        options={{
          cardOverlayEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="ItemAddForm"
        component={ItemAddForm}
        options={{
          cardOverlayEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="RecommendationDetail"
        component={RecommendationDetail}
        options={{
          cardStyle: {
            backgroundColor: 'transparent',
          },
          gestureDirection: 'vertical',
        }}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [item.id];
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
