import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import SelectStyle from './SelectStyle';
import StyleSelector from './StyleSelector';
import RecommendationList from './RecommendationList';

const DATA = [
  {
    id: '1',
    instagramID: 'slowsteadyclub',
    imageUrl:
      'https://smart-wardrobe-static.s3.amazonaws.com/mss/woman/feminine/13600.jpg',
  },
  {
    id: '2',
    instagramID: 'slowsteadyclub',
    imageUrl:
      'https://scontent-atl3-2.cdninstagram.com/v/t51.29350-15/121963722_2098757286923695_4914056245156051055_n.jpg?_nc_cat=106&_nc_sid=8ae9d6&_nc_ohc=pZe6OweIqpgAX_hRz_A&_nc_ht=scontent-atl3-2.cdninstagram.com&oh=448dc0a22636439b46504708f03121e7&oe=5FB0A523',
  },
  {
    id: '3',
    instagramID: 'studionicholson',
    imageUrl:
      'https://scontent-atl3-2.cdninstagram.com/v/t51.29350-15/122005511_923150561427914_3994384235945185794_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=BKYUwXjSMYYAX-x0LPQ&_nc_ht=scontent-atl3-2.cdninstagram.com&oh=aa7fe7b23e143b0031fe457b1f8e255f&oe=5FAF3A3B',
  },
];

const RecommendationScreen = () => {
  const { userGender } = useSelector((state) => state.auth.userInfo);
  const [currentStyle, setCurrentStyle] = useState('');

  useEffect(() => {
    console.log(currentStyle);
  }, [currentStyle]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>오늘의 추천</Text>
        <Ionicons
          name="md-refresh-circle"
          size={24}
          color="#AAAAAA"
          onPress={() => console.log('refresh')}
          style={styles.refreshBtn}
        />
      </View>
      <StyleSelector
        userGender={userGender}
        currentStyle={currentStyle}
        onSelect={setCurrentStyle}
      />
      {currentStyle === '' ? (
        <SelectStyle />
      ) : (
        <RecommendationList data={DATA} />
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
  refreshBtn: {},
});

export default RecommendationScreen;
