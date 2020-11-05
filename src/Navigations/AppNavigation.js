import React from 'react';
import { SafeAreaView, View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import {
  HomeScreen,
  LikeScreen,
  ProfileScreen,
  WardrobeScreen,
  AddScreen,
} from '../Screens';
import RecommendationStack from './RecommendationStack';

const Tab = new createBottomTabNavigator();

const Empty = () => {
  return <View />;
};
const AppNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FA6400',
        inactiveTintColor: '#EAEAEA',
        showLabel: false,
        style: {
          height: 88,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <Icon name="home" size={props.size} color={props.color} />
          ),
        }}
      />

      <Tab.Screen
        name="Wardrobe"
        component={WardrobeScreen}
        options={{
          tabBarIcon: (props) => (
            <Icon name="tshirt-crew" size={props.size} color={props.color} />
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={Empty}
        options={{
          tabBarIcon: (props) => (
            <Icon name="plus-box" size={props.size} color={props.color} />
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
          tabBarIcon: (props) => (
            <Icon name="heart" size={props.size} color={props.color} />
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
          tabBarIcon: (props) => (
            <Icon name="account" size={props.size} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
