import React, { useRef, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';

const SelectGender = ({ genderValue, setGenderValue }) => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const selectMale = () => {
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setGenderValue('userGender', 'male');
  };

  const selectFemale = () => {
    Animated.timing(moveAnim, {
      toValue: 140,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setGenderValue('userGender', 'female');
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animContainer,
          {
            left: moveAnim,
          },
        ]}
      />
      <TouchableOpacity
        onPress={() => {
          selectMale();
        }}
        style={styles.btnContainer}
      >
        <Text
          style={[
            styles.label,
            { color: genderValue == 'male' ? 'white' : '#333' },
          ]}
        >
          남자
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          selectFemale();
        }}
        style={styles.btnContainer}
      >
        <Text
          style={[
            styles.label,
            { color: genderValue == 'female' ? 'white' : '#333' },
          ]}
        >
          여자
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 280,
    height: 48,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'rgba(2,2,2,0.5)',
    marginVertical: 8,
  },
  animContainer: {
    backgroundColor: '#FA6400',
    borderRadius: 5,
    position: 'absolute',
    height: '100%',
    width: 140,
  },
  btnContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default SelectGender;
