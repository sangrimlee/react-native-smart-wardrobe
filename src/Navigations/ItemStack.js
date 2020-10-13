import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { ItemAddForm, SelectCategory, ItemInfo } from '../Screens/ItemScreen';

const Stack = new createStackNavigator();

const ItemStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: true }}
    >
      <Stack.Screen name="ItemAddForm" component={ItemAddForm} />
      <Stack.Screen name="SelectCategory" component={SelectCategory} />
      <Stack.Screen
        name="ItemInfo"
        component={ItemInfo}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default ItemStack;
