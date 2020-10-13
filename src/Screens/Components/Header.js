import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ label }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ marginTop: insets.top }}>
      {label ? (
        <View style={styles.container}>
          <Text style={styles.title}>{label}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 18,
    color: '#2C2C2C',
  },
});

export default Header;
