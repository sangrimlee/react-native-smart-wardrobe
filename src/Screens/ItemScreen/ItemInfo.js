import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BackHeader } from '../Components';
import { BottomTab } from './Components';
import { removeItem } from '../../store/actions/item';

const { height } = Dimensions.get('window');

const ItemInfo = ({ route, navigation }) => {
  const itemInfo = route.params.itemInfo;
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);

  const {
    itemName,
    imageUrl,
    category,
    subCategory,
    color,
    brand,
    description,
  } = itemInfo;
  const handleModify = () => {
    navigation.navigate('ItemStack', {
      screen: 'ItemModifyForm',
      params: {
        itemInfo,
      },
    });
  };
  const handleDelete = () => {
    dispatch(removeItem(userToken, itemInfo));
    navigation.pop();
  };
  return (
    <View style={styles.container}>
      <View style={{ height: height * 0.5 }}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{
            uri: imageUrl,
          }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.category}>
          {category} {'>'} {subCategory}
        </Text>
        <Text style={styles.itemName} numberOfLines={2}>
          {itemName}
        </Text>
        <Text style={styles.itemInfo}>
          {brand} · {color}
        </Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          {description ? description : '내용 없음'}
        </Text>
      </View>
      <BackHeader />
      <BottomTab
        onModify={() => handleModify()}
        onDelete={() => handleDelete()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  underLay: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
    marginVertical: 8,
  },
  category: {
    fontFamily: 'SFPro-Text-Medium',
    fontSize: 15,
    color: 'rgba(0,0,0,0.5)',
  },
  itemName: {
    fontFamily: 'SFPro-Text-Bold',
    fontSize: 18,
    color: '#2C2C2C',
    marginVertical: 6,
  },
  itemInfo: {
    fontFamily: 'SFPro-Text-Medium',
    fontSize: 14,
    color: 'rgba(0,0,0,0.5)',
  },
  description: {
    fontFamily: 'SFPro-Text-Regular',
    fontSize: 16,
    color: '#2C2C2C',
    lineHeight: 20,
    letterSpacing: 0.5,
  },
});

export default ItemInfo;
