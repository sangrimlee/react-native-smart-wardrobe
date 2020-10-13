import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../Components';

const LikeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header label="내 찜 목록" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LikeScreen;
