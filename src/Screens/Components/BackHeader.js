import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = ({ label }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={24}
          onPress={() => navigation.pop()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  headerContainer: {
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 18,
    color: '#2C2C2C',
  },
});

export default Header;
