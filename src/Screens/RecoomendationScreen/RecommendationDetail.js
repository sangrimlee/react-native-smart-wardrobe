import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  FlatList,
} from 'react-native';
import GestureView from '../Components/GestureView';
import { ItemCard } from '../ItemScreen';

const { width, height } = Dimensions.get('window');

const ITEM_INFO = [
  {
    id: 1,
    imageUrl:
      'http://slowsteadyclub.com/web/product/big/202010/47d33370e93f1b5e39007c3259af9d51.jpg',
    itemName: 'D1002-1 GOOSE DOWN PARKA',
    category: '아우터',
    subCategory: '파카',
  },
  {
    id: 2,
    imageUrl:
      'http://slowsteadyclub.com/web/product/big/202010/47d33370e93f1b5e39007c3259af9d51.jpg',
    itemName: 'D1002-1 GOOSE DOWN PARKA PARKA',
    category: '아우터',
    subCategory: '파카',
  },
  {
    id: 3,
    imageUrl:
      'http://slowsteadyclub.com/web/product/big/202010/47d33370e93f1b5e39007c3259af9d51.jpg',
    itemName: 'D1002-1 GOOSE DOWN PARKA',
    category: '아우터',
    subCategory: '파카',
  },
  {
    id: 4,
    imageUrl:
      'http://slowsteadyclub.com/web/product/big/202010/47d33370e93f1b5e39007c3259af9d51.jpg',
    itemName: 'D1002-1 GOOSE DOWN PARKA',
    category: '아우터',
    subCategory: '파카',
  },
];

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerBar} />
      <Text style={styles.headerTitle}>관련된 아이템</Text>
    </View>
  );
};
const RecommendationDetail = ({ route, navigation }) => {
  const { itemList } = route.params?.item;
  const mountAnimValue = useRef(new Animated.Value(0)).current;

  const mountAnim = () => {
    Animated.timing(mountAnimValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const translateY = mountAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: [height * 0.5, 0],
  });

  useEffect(() => {
    mountAnim();
  }, []);

  const renderItem = ({ item }) => {
    return <ItemCard itemInfo={item} />;
  };

  return (
    <GestureView onGesture={() => navigation.pop()}>
      <Animated.View
        style={[styles.container, { transform: [{ translateY }] }]}
      >
        <View style={styles.topContainer} />
        <View style={styles.bottomContainer}>
          <Header />
          <View style={styles.listContainer}>
            {itemList.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>관련된 아이템이 없습니다.</Text>
              </View>
            ) : (
              <FlatList
                data={itemList}
                keyExtractor={(item) => item.imageUrl}
                renderItem={renderItem}
                horizontal={true}
              />
            )}
          </View>
        </View>
      </Animated.View>
    </GestureView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: height * 0.55,
  },
  bottomContainer: {
    height: height,
    width: width,
    backgroundColor: '#FFFEFF',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  headerContainer: {
    height: 80,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  headerBar: {
    width: 40,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#DADBDA',
    marginBottom: 24,
  },
  headerTitle: {
    fontFamily: 'SFPro-Text-Medium',
    fontSize: 18,
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    height: '100%',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 16,
  },
});

export default RecommendationDetail;
