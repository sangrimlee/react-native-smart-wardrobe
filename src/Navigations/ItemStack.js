import React from 'react';
import {
  ItemModifyForm,
  SelectCategory,
  SelectColor,
  ItemInfo,
  ItemRecommendation,
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
      <Stack.Screen
        name="ItemRecommendation"
        component={ItemRecommendation}
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

export default ItemStack;
