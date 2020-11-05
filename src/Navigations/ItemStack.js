import React from 'react';
import {
  ItemModifyForm,
  SelectCategory,
  SelectColor,
  ItemInfo,
} from '../Screens/ItemScreen';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = new createStackNavigator();

const ItemStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ItemModifyForm" component={ItemModifyForm} />
      <Stack.Screen name="SelectCategory" component={SelectCategory} />
      <Stack.Screen name="ItemInfo" component={ItemInfo} />
      <Stack.Screen name="SelectColor" component={SelectColor} />
    </Stack.Navigator>
  );
};

export default ItemStack;
