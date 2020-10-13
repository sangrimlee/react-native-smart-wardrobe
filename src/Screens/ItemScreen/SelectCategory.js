import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import { categoryList } from './Components';
import { Transition, Transitioning } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={100} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={100} />
  </Transition.Together>
);

const Header = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: insets.top,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.3)',
      }}
    >
      <MaterialCommunityIcons
        style={{ flex: 1 }}
        name="arrow-left"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <Text
        style={{
          flex: 1,
          fontFamily: 'SFPro-Text-Semibold',
          fontSize: 18,
          color: '#2C2C2C',
        }}
      >
        카테고리 선택
      </Text>
      <View style={{ flex: 1 }} />
    </View>
  );
};

const SelectCategory = ({ navigation, routes }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const ref = useRef();

  return (
    <View style={styles.container}>
      <Transitioning.View ref={ref} transition={transition}>
        <Header />
        {categoryList.map(({ category, subCategories }, index) => {
          return (
            <TouchableWithoutFeedback
              key={category}
              onPress={() => {
                ref.current.animateNextTransition();
                setCurrentIndex(index === currentIndex ? null : index);
              }}
            >
              <View style={styles.cardContainer}>
                <View style={styles.headerContainer}>
                  <Text
                    style={[
                      styles.header,
                      { color: index === currentIndex ? '#FA6400' : null },
                    ]}
                  >
                    {category}
                  </Text>
                </View>
                {index === currentIndex && (
                  <View style={styles.subCategoriesList}>
                    {subCategories.map((subCategory) => (
                      <TouchableHighlight
                        activeOpacity={0.1}
                        underlayColor="#FA6400"
                        key={subCategory}
                        onPress={() =>
                          navigation.navigate('ItemStack', {
                            screen: 'ItemAddForm',
                            params: {
                              category: { category, subCategory },
                            },
                          })
                        }
                      >
                        <Text style={[styles.body]}>{subCategory}</Text>
                      </TouchableHighlight>
                    ))}
                  </View>
                )}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </Transitioning.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  cardContainer: {
    justifyContent: 'center',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  header: {
    fontFamily: 'SFPro-Text-Medium',
    fontSize: 16,
  },
  body: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  subCategoriesList: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
});

export default SelectCategory;
