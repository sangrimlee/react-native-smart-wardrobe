import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import RecommendationCard from './RecommendationCard';
import { recommendActionTypes as types } from '../../store/constants/ActionTypes';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>추천 스타일이 없습니다.</Text>
    </View>
  );
};
const RecommendationList = ({ data }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const loading = useSelector((state) => state.loading);
  const renderItem = ({ item, index }) => {
    return <RecommendationCard item={item} index={index} scrollX={scrollX} />;
  };

  if (loading[types.GET_RECOMMENDATION_LIST] !== false) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <EmptyList />
      ) : (
        <Animated.FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.recommendImageURL}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x: scrollX },
                },
              },
            ],
            { useNativeDriver: true, duration: 1000 },
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 360,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 14,
  },
});

export default RecommendationList;
