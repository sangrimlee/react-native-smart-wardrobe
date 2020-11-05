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

const ItemCard = ({ itemInfo }) => {
  const navigation = useNavigation();
  const { imageUrl, itemName } = itemInfo;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('ItemStack', {
          screen: 'ItemInfo',
          params: {
            itemInfo,
          },
        })
      }
    >
      <View style={styles.imgContainer}>
        <Image
          style={[
            styles.image,
            {
              height: width / 2 - 32,
            },
          ]}
          source={{ uri: imageUrl }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemName} numberOfLines={2} ellipsizeMode="tail">
          {itemName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5,
    marginBottom: 8,
  },
  image: { width: '100%', borderRadius: 5 },
  itemName: {
    fontFamily: 'SFPro-Text-Regular',
    fontSize: 12,
    paddingRight: 32,
  },
});

export default ItemCard;
