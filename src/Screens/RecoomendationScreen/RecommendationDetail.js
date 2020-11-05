import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  FlatList,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { BackHeader } from '../Components';
import ItemCard from '../ItemScreen/ItemCard';
const { width, height } = Dimensions.get('window');

const ITEM_INFO = [
  {
    imageUrl:
      'http://slowsteadyclub.com/web/product/big/202010/47d33370e93f1b5e39007c3259af9d51.jpg',
    itemName: 'D1002-1 GOOSE DOWN PARKA',
    category: '아우터',
    subCategory: '파카',
  },
];
const RecommendationDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const mountAnimValue = useRef(new Animated.Value(0)).current;

  const translateY = mountAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
  });
  const scale = mountAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1.2],
  });
  useEffect(() => {
    const mountAnim = () => {
      Animated.timing(mountAnimValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };
    mountAnim();
  }, []);

  return (
    <View style={styles.container}>
      <SharedElement style={[StyleSheet.absoluteFillObject]} id={item.imageUrl}>
        <Image
          source={{
            uri: item.imageUrl,
          }}
          style={[styles.img]}
        />
      </SharedElement>
      <BackHeader />
      <Animated.View
        style={[
          styles.bottomContainer,
          {
            opacity: mountAnimValue,
            transform: [
              {
                translateY,
              },
            ],
          },
        ]}
      >
        <Text style={styles.title}>아이템 리스트</Text>
        <FlatList />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  img: {
    ...StyleSheet.absoluteFillObject,
    height: height * 0.65,
    width: '100%',
  },
  bottomContainer: {
    backgroundColor: '#F2F2F2',
    height: height * 0.45,
    width: '100%',
    paddingTop: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 24,
    marginBottom: 16,
  },
});

export default RecommendationDetail;
