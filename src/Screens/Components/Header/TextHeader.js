import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderContainer from './HeaderContainer';

const TextHeader = ({
  leftLabel,
  label,
  rightLabel,
  handleLeft,
  handleRight,
  border,
}) => {
  return (
    <HeaderContainer border={border}>
      {leftLabel ? (
        <TouchableOpacity
          onPress={handleLeft}
          style={[styles.container, { alignItems: 'flex-start' }]}
        >
          <Text style={styles.label}>{leftLabel}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.container} />
      )}
      <View style={[styles.container, { alignItems: 'center' }]}>
        <Text style={styles.label}>{label}</Text>
      </View>
      {rightLabel ? (
        <TouchableOpacity
          onPress={handleRight}
          style={[styles.container, { alignItems: 'flex-end' }]}
        >
          <Text style={styles.label}>{rightLabel}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.container} />
      )}
    </HeaderContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 16,
  },
});

export default TextHeader;
