import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { IconHeader } from '../Components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const colordata = [
  '화이트',
  '라이트 그레이',
  '다크 그레이',
  '블랙',
  '레드',
  '핑크',
  '오렌지',
  '머스타드',
  '옐로우',
  '민트',
  '그린',
  '올리브',
  '블루',
  '퍼플',
  '베이지',
  '브라운',
];

const Item = ({ color, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.itemContainer}>
      <Text style={styles.label}>{color}</Text>
    </TouchableOpacity>
  );
};

const SelectColor = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const type = route.params?.type ?? '';
  const handleSelect = (color) => {
    if (type === 'ADD') {
      navigation.navigate('ItemAddForm', {
        color,
      });
    } else if (type === 'MODIFY') {
      navigation.navigate('ItemStack', {
        screen: 'ItemModifyForm',
        params: {
          color,
        },
      });
    }
  };
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <IconHeader
        leftName="arrow-left"
        handleLeft={() => navigation.pop()}
        label="카테고리 선택"
      />
      <ScrollView>
        {colordata.map((color) => (
          <Item
            color={color}
            key={color}
            onSelect={() => handleSelect(color)}
          />
        ))}
        <View style={{ height: 240 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEFF',
  },
  itemContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  label: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 16,
  },
});

export default SelectColor;
