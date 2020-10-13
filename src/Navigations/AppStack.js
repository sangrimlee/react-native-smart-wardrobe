import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AppNavigation from './AppNavigation';
import ItemStack from './ItemStack';
import AddScreen from '../Screens/AddScreen';
const Stack = new createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: true }}
    >
      <Stack.Screen name="AppNavigation" component={AppNavigation} />
      <Stack.Screen
        name="ItemStack"
        component={ItemStack}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.3)' },
          cardOverlayEnabled: true,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
