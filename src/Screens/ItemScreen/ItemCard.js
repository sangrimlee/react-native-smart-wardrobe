import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const ItemCard = ({ imageUrl, title, category }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('ItemStack', {
          screen: 'ItemInfo',
          params: {
            title,
            imageUrl,
            category,
          },
        })
      }
    >
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={{ uri: `${imageUrl}` }} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.category}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: width,
    height: 96,
  },
  imgContainer: {
    justifyContent: 'center',
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: { height: 80, width: 80, borderRadius: 15 },
  detailContainer: { justifyContent: 'center' },
  title: {
    fontFamily: 'SFPro-Text-Bold',
    width: width - 144,
    fontSize: 15,
    color: '#2C2C2C',
    marginBottom: 4,
  },
  category: {
    fontFamily: 'SFPro-Text-Medium',
    fontSize: 14,
    color: '#AAA',
  },
});

export default ItemCard;
