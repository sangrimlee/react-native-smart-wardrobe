import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const VerticalDivider = () => {
  return (
    <View
      style={{
        borderRightWidth: 0.3,
        borderRightColor: 'black',
        height: 28,
      }}
    />
  );
};
const BottomTab = ({ onLike, onModify, onDelete }) => {
  const insets = useSafeAreaInsets();
  const [like, setLike] = useState(false);
  return (
    <View style={{ ...styles.container, height: 80 + insets.bottom }}>
      <View style={{ ...styles.tabContainer, marginBottom: insets.bottom }}>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={{ fontSize: 16, color: 'white' }}>스타일 보기</Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            style={styles.icon}
            name={like ? 'heart' : 'heart-outline'}
            size={28}
            color={like ? '#FA6400' : 'rgba(0,0,0,0.75)'}
            onPress={() => setLike(!like)}
          />
          <VerticalDivider />
          <MaterialCommunityIcons
            style={styles.icon}
            name="pencil-outline"
            size={28}
            color="rgba(0,0,0,0.75)"
            onPress={() => onModify()}
          />
          <VerticalDivider />
          <MaterialCommunityIcons
            style={styles.icon}
            name="trash-can-outline"
            size={28}
            color="rgba(0,0,0,0.75)"
            onPress={onDelete}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopColor: 'rgba(0,0,0,0.3)',
    borderTopWidth: 0.3,
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA6400',
    height: 42,
    width: 160,
    borderRadius: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default BottomTab;
