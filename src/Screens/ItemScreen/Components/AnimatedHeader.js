import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AnimatedHeader = ({ scrollY, height }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const inputRange = [0, height - 100, height - 99];
  const headerColor = scrollY.interpolate({
    inputRange,
    outputRange: ['transparent', 'transparent', '#FFFFFF'],
  });
  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: headerColor,
        },
      ]}
    >
      <View style={[styles.headerContainer, { marginTop: insets.top }]}>
        <MaterialCommunityIcons
          style={{ flex: 1, color: '#020202' }}
          name="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 99,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default AnimatedHeader;
