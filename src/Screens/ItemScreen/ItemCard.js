import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TabBarIcon } from '../../Components/Icon';

const { width, height } = Dimensions.get('window');

const ItemCard = ({ itemInfo }) => {
  const navigation = useNavigation();
  const [isLike, setIsLike] = useState(false);
  const { imageUrl, itemName } = itemInfo;
  const handleLike = () => {
    setIsLike(!isLike);
  };
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
        <TabBarIcon
          name={isLike ? 'heart-active' : 'heart'}
          size={20}
          color="black"
          onPress={() => handleLike()}
        />
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
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  itemName: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 14,
  },
});

export default ItemCard;
