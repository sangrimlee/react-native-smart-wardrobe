import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createStackNavigator } from '@react-navigation/stack';

import {
  RecommendationList,
  RecommendationDetail,
} from '../Screens/RecoomendationScreen';
const Stack = createSharedElementStackNavigator();

const RecommendationStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="RecommendationList" component={RecommendationList} />
      <Stack.Screen
        name="RecommendationDetail"
        component={RecommendationDetail}
        options={{
          cardStyleInterpolator: ({ current }) => ({
            cardStyle: { opacity: current.progress },
          }),
          gestureEnabled: false,
        }}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`${item.imageUrl}`];
        }}
      />
    </Stack.Navigator>
  );
};

export default RecommendationStack;
