import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderContainer from './HeaderContainer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const IconHeader = ({
  leftName,
  label,
  rightName,
  handleLeft,
  handleRight,
  border,
}) => {
  return (
    <HeaderContainer border={border}>
      <View style={[styles.container, { alignItems: 'flex-start' }]}>
        <MaterialCommunityIcons
          onPress={handleLeft}
          name={leftName}
          size={20}
        />
      </View>

      <View style={[styles.container, { alignItems: 'center' }]}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={[styles.container, { alignItems: 'flex-end' }]}>
        <MaterialCommunityIcons
          onPress={handleRight}
          name={rightName}
          size={20}
        />
      </View>
    </HeaderContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 16,
  },
});

export default IconHeader;
