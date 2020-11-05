import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const HeaderContainer = ({ border, children }) => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.headerContainer, { borderBottomWidth: border ? 0 : 1 }]}
      >
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F9FAF9',
  },
  headerContainer: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderColor: 'rgba(0,0,0,0.1)',
  },
});

export default HeaderContainer;
