import React from 'react';
import { Animated } from 'react-native';

const AnimatedImage = ({ scrollY, height, imageUrl }) => {
  const inputRange = [-height, 0, height];
  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [3.5, 1, 1.2],
  });
  return (
    <Animated.View style={{ height, transform: [{ scale: scale }] }}>
      <Animated.Image
        style={{
          height: '100%',
          width: '100%',
        }}
        source={{
          uri: `${imageUrl}`,
        }}
        resizeMode="cover"
      />
    </Animated.View>
  );
};

export default AnimatedImage;
