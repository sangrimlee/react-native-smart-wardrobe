import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const SelectStyle = () => {
  let animationRef = null;
  useEffect(() => {
    animationRef.play();
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.lottie}
        ref={(animation) => (animationRef = animation)}
        source={require('../../../assets/svg/select-style.json')}
      />
      <Text style={styles.title}>스타일을 선택하세요.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 360,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 160,
    height: 160,
  },
  title: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 14,
  },
});

export default SelectStyle;
