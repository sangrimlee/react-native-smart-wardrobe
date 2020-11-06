import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen, WardrobeScreen } from '../Screens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabBarIcon } from '../Components/Icon';
const Tab = new createBottomTabNavigator();

const Empty = () => {
  return <View />;
};
const AppNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#262626',
        inactiveTintColor: '#262626',
        showLabel: false,
        style: {
          height: 48 + insets.bottom,
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: 'rgba(0,0,0,0.1)',
          backgroundColor: '#F9FAF9',
          justifyContent: 'flex-end',
          paddingHorizontal: 16,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <TabBarIcon name="home-active" size={size} color={color} />
            ) : (
              <TabBarIcon name="home" size={size} color={color} />
            ),
        }}
      />

      <Tab.Screen
        name="Wardrobe"
        component={WardrobeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <TabBarIcon name="wardrobe-active" size={size} color={color} />
            ) : (
              <TabBarIcon name="wardrobe" size={size} color={color} />
            ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={Empty}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <TabBarIcon name="add-active" size={size} color={color} />
            ) : (
              <TabBarIcon name="add" size={size} color={color} />
            ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('ItemAddForm');
          },
        })}
      />

      <Tab.Screen
        name="Like"
        component={Empty}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <TabBarIcon name="heart-active" size={size} color={color} />
            ) : (
              <TabBarIcon name="heart" size={size} color={color} />
            ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('LikeScreen');
          },
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <TabBarIcon name="profile-active" size={size} color={color} />
            ) : (
              <TabBarIcon name="profile" size={size} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
