import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AppNavigation from './AppNavigation';
import ItemStack from './ItemStack';
import { LikeScreen } from '../Screens';
import { ItemAddForm } from '../Screens/ItemScreen';
import RecommendationDetail from '../Screens/RecoomendationScreen/RecommendationDetail';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="AppNavigation">
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
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
          gestureDirection: 'vertical',
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress,
            },
          }),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
