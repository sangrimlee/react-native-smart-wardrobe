import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { All, Outer, Top, Bottom, OnePiece } from './Wardrobe';
import { TextHeader } from '../Components/Header';
const Tab = createMaterialTopTabNavigator();

const WardrobeScreen = () => {
  return (
    <View style={styles.container}>
      <TextHeader label="나의 옷장" border />
      <View style={styles.wardrobeContainer}>
        <Tab.Navigator
          initialRouteName="전체"
          tabBarOptions={{
            labelStyle: {
              fontFamily: 'SFPro-Text-Semibold',
              fontSize: 14,
            },
            activeTintColor: '#2C2C2C',
            inactiveTintColor: 'rgba(0,0,0,0.3)',

            scrollEnabled: true,
            style: {
              height: 48,
              elevation: 0,
              backgroundColor: 'transparent',
              borderBottomColor: 'rgba(0,0,0,0.1)',
              borderBottomWidth: 1,
            },

            tabStyle: {
              width: 80,
              marginBottom: 8,
            },

            indicatorStyle: {
              backgroundColor: '#000',
            },
          }}
        >
          <Tab.Screen name="전체" component={All} />
          <Tab.Screen name="아우터" component={Outer} />
          <Tab.Screen name="상의" component={Top} />
          <Tab.Screen name="하의" component={Bottom} />
          <Tab.Screen name="원피스" component={OnePiece} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAF9',
  },
  wardrobeContainer: {
    flex: 1,
  },
});

export default WardrobeScreen;
