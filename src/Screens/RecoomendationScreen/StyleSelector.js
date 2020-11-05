import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styleData from './styleData';

const ImageTab = ({ style, label, imageUrl, selected, onSelect }) => {
  const color = selected ? '#FA6400' : 'black';
  const opacity = selected ? 0.5 : 0.2;
  return (
    <TouchableOpacity
      style={[
        styles.tabContainer,
        { shadowColor: color, shadowOpacity: opacity },
      ]}
      onPress={() => onSelect(style)}
    >
      <Image style={styles.tabImage} source={{ uri: imageUrl }} />
      <Text style={[styles.tabLabel, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const StyleSelector = ({ userGender, currentStyle, onSelect }) => {
  const renderItem = ({ item }) => (
    <ImageTab
      label={item.label}
      imageUrl={item.imageUrl}
      selected={currentStyle === item.style}
      style={item.style}
      onSelect={onSelect}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={styleData[userGender]}
        renderItem={renderItem}
        keyExtractor={(item) => item.style}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 92,
    marginBottom: 8,
  },
  listContainer: {
    marginHorizontal: 16,
  },
  tabContainer: {
    height: 92,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
  },
  tabImage: {
    height: 64,
    width: 64,
    borderRadius: 64,
  },
  tabLabel: {
    marginTop: 4,
    fontFamily: 'SFPro-Text-Medium',
    fontSize: 12,
  },
});

export default StyleSelector;
