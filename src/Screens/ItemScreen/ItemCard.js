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
import { likeItem } from '../../store/actions/item';
import { useDispatch, useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');

const ItemCard = ({ cardWidth, itemInfo }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);
  const { imageUrl, itemName, like, subCategory, category, id } = itemInfo;
  const handleLike = () => {
    dispatch(likeItem(userToken, { subCategory, category, id }));
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
          name={like ? 'heart-active' : 'heart'}
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
    width: width / 2,
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
