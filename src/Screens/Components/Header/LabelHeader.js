import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderContainer from './HeaderContainer';

const LabelHeader = ({ label }) => {
  return (
    <HeaderContainer>
      <Text style={styles.label}>{label}</Text>
    </HeaderContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 16,
  },
});

export default LabelHeader;
