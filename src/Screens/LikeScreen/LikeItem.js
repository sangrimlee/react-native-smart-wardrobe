import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

const LikeItem = ({ type, name, url }) => {
  return (
    <View style={styles.itemContainer}>
      <View
        style={[
          styles.imgContainer,
          { height: type === 'coordi' ? width / 1.5 : width / 2 - 16 },
        ]}
      >
        <Image
          source={{
            uri: url,
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode="tail">
          {name}
        </Text>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={20}
          color="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 10,
    marginBottom: 16,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 4,
    paddingHorizontal: 2,
  },
  label: {
    fontFamily: 'SFPro-Text-Medium',
    fontSize: 14,
    paddingRight: 16,
  },
});

export default LikeItem;
