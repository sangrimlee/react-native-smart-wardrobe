import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import SelectStyle from './SelectStyle';
import StyleSelector from './StyleSelector';
import RecommendationList from './RecommendationList';
import { getRecommendationList } from '../../store/actions/recommend';

const RecommendationScreen = () => {
  const [currentStyle, setCurrentStyle] = useState('');
  const { userToken, userInfo } = useSelector((state) => state.auth);
  const { recommendationList, weatherInfo } = useSelector(
    (state) => state.recommend,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentStyle !== '') {
      dispatch(
        getRecommendationList(userToken, weatherInfo.feelTemp, currentStyle),
      );
    }
  }, [currentStyle]);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>오늘의 추천</Text>
        <Ionicons
          name="md-refresh-circle"
          size={24}
          color="black"
          onPress={() =>
            dispatch(
              getRecommendationList(
                userToken,
                weatherInfo.feelTemp,
                currentStyle,
              ),
            )
          }
        />
      </View>
      <StyleSelector
        userGender={userInfo.userGender}
        currentStyle={currentStyle}
        onSelect={setCurrentStyle}
      />
      {currentStyle === '' ? (
        <SelectStyle />
      ) : (
        <RecommendationList data={recommendationList} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  title: {
    fontFamily: 'SFPro-Text-Medium',
    fontSize: 18,
  },
});

export default RecommendationScreen;
