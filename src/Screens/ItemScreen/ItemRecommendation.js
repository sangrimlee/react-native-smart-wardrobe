import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import GestureView from '../Components/GestureView';
import { changeSubCategoryEN, changeColorEN } from '../../store/lib/functions';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerBar} />
      <Text style={styles.headerTitle}>관련된 스타일</Text>
    </View>
  );
};

const temp = [
  'https://image.musinsa.com/mfile_s01/_street_images/66153/street_5fab770a5c2c4.jpg',
  'https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_5fae1d3f313bf.jpg',
];

const RecommendationCard = ({ imageUrl }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={{ uri: imageUrl }} />
    </View>
  );
};

const ItemRecommendation = ({ route, navigation }) => {
  const { color, subCategory } = route.params;
  const { userToken } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendationList, setRecommendationList] = useState([]);
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
    let colorEN = changeColorEN(color);
    let subCategoryEN = changeSubCategoryEN(subCategory);
    const getRecommendationList = async (userToken, color, subCategory) => {
      setIsLoading(true);
      const result = await axios.post('http://3.21.245.113:8000/mycoordi', {
        token: userToken,
        color,
        subcategory: subCategory,
      });
      const newRecommendationList = result.data.filter(
        (url) => url !== 'There is no image recommended',
      );
      setRecommendationList(newRecommendationList);
      setIsLoading(false);
    };
    getRecommendationList(userToken, colorEN, subCategoryEN);
    mountAnim();
  }, []);

  const renderItem = ({ item }) => <RecommendationCard imageUrl={item} />;

  return (
    <GestureView onGesture={() => navigation.pop()}>
      <Animated.View
        style={[styles.container, { transform: [{ translateY }] }]}
      >
        <View style={styles.topContainer} />
        <View style={styles.bottomContainer}>
          <Header />
          <View style={styles.listContainer}>
            {isLoading ? (
              <View style={styles.emptyContainer}>
                <ActivityIndicator size="small" />
              </View>
            ) : recommendationList.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>
                  관련된 추천 스타일이 없습니다.
                </Text>
              </View>
            ) : (
              <FlatList
                renderItem={renderItem}
                data={recommendationList}
                keyExtractor={(item) => item}
                pagingEnabled={true}
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
    height: height * 0.5,
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
  cardContainer: {
    width: width / 2,
    height: height * 0.3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    marginHorizontal: 8,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.3,
  },
  emptyTitle: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 16,
  },
});

export default ItemRecommendation;
