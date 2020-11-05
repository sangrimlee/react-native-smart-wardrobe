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
const Stack = createStackNavigator();

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
        name="RecommendationStack"
        component={RecommendationStack}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
