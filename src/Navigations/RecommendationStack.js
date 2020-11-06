import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createStackNavigator } from '@react-navigation/stack';

import {
  RecommendationList,
  RecommendationDetail,
} from '../Screens/RecoomendationScreen';
const Stack = createStackNavigator();

const RecommendationStack = () => {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen
        name="RecommendationDetail"
        component={RecommendationDetail}
      />
    </Stack.Navigator>
  );
};

export default RecommendationStack;
