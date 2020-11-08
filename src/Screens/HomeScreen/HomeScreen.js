import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Weather } from '../Components';
import { RecommendationScreen } from '../RecoomendationScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Weather />
      <View style={styles.mainContainer}>
        <RecommendationScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEFF',
  },
  title: {
    fontFamily: 'SFPro-Text-Medium',
    fontSize: 16,
    marginBottom: 16,
  },
  mainContainer: {
    flex: 1,
  },
});

export default HomeScreen;
