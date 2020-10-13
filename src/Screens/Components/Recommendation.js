import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import MainCard from './MainCard';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    instagramID: 'slowsteadyclub',
    imageUrl:
      'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/116550857_769606913813726_8506515377747322983_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=BzqqVClQ4yoAX8N6cHQ&oh=46699e1067e5f5d23b51b34c887c44ff&oe=5F4EF265',
  },
  {
    id: '2',
    instagramID: 'slowsteadyclub',
    imageUrl:
      'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/106682059_1176509129379538_4894653869894877780_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=WaRvL0GxtikAX8jF_by&oh=f466a81fc329536b837ce9a8ad62d0e3&oe=5F506B12',
  },
  {
    id: '3',
    instagramID: 'studionicholson',
    imageUrl:
      'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/106461334_3194736330647886_2676888737070835504_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yXT42hR5D7UAX8FBQ8d&oh=fe99df1421edd232a3432632ca580717&oe=5F50E3CD',
  },
  {
    id: '4',
    instagramID: 'fr8ight',
    imageUrl:
      'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/116967646_720270441880089_8871306340542245392_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=hzCq9oYenW0AX8gBBfr&oh=898f447c016d8aeca9b55c355727c3d4&oe=5F4DEA25',
  },
];

const { width, height } = Dimensions.get('window');

const Recommendation = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    return <MainCard {...item} index={index} scrollX={scrollX} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Today's pick</Text>
        <Ionicons
          name="md-refresh-circle"
          size={24}
          color="#AAAAAA"
          onPress={() => console.log('refresh')}
          style={styles.refreshBtn}
        />
      </View>
      <Animated.FlatList
        data={DATA}
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

export default Recommendation;
