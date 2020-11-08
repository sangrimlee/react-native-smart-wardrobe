import React, { useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import RecommendationCard from './RecommendationCard';

const RecommendationList = ({ data }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    return <RecommendationCard item={item} index={index} scrollX={scrollX} />;
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default RecommendationList;
