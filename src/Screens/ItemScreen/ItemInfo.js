import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { AnimatedImage, AnimatedHeader, BottomTab } from './Components';

const { width, height } = Dimensions.get('window');

const ItemInfo = ({ route }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const { imageUrl } = route.params;
  const { itemName, category, subCategory, color, brand, description } = {
    itemName: '유틸리티 필드 하프 셔츠',
    category: '상의',
    subCategory: '반팔 셔츠',
    color: '흰색',
    brand: '이스트로그',
    description:
      '글로버올의 시그너처 모델인 몬티와 컬래버레이션을 진행한 X GLOVERALL MONTY DUFFLE COAT입니다. 기존의 세트인 슬리브를 레글런으로 변형하고 소매 통을 키워 편안한 실루엣을 연출하였습니다. 또한, 두 장 소매로 변형하고 두 개의 턱을 넣어 편안한 활동분량을 주었습니다. EASTLOGUE 점퍼 디자인에서 주로 사용되는 덧댐을 어깨에 덧대 남성적인 느낌을 주었습니다. 기존 글로버올 몬티 제품의 가장 아이코닉한 컬러인 카멜과 네이비 두 가지 색상으로 출시되었습니다.',
  };
  return (
    <View style={styles.container}>
      <AnimatedHeader scrollY={scrollY} height={height * 0.5} />
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: false, duration: 1000 },
        )}
        overScrollMode="always"
      >
        <AnimatedImage
          imageUrl={imageUrl}
          scrollY={scrollY}
          height={height * 0.5}
        />

        <View style={styles.detailContainer}>
          <Text style={styles.category}>
            {category} > {subCategory}
          </Text>
          <Text style={styles.itemName} numberOfLines={2}>
            {itemName}
          </Text>
          <Text style={styles.itemInfo}>
            {brand} · {color}
          </Text>
          <View style={styles.divider} />
          <Text style={styles.description}>{description}</Text>
        </View>
      </Animated.ScrollView>
      <BottomTab />
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
    borderTopColor: 'rgba(0,0,0,0.3)',
    borderTopWidth: 0.5,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
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
