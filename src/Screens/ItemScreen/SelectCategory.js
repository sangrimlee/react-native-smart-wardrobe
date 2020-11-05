import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import { categoryList } from './Components';
import Animated, { Transition, Transitioning } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { IconHeader } from '../Components/Header';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={100} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={100} />
  </Transition.Together>
);

const SelectCategory = ({ navigation, route }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const ref = useRef();
  const type = route.params?.type ?? '';

  return (
    <View style={styles.container}>
      <Transitioning.View ref={ref} transition={transition}>
        <IconHeader
          leftName="arrow-left"
          handleLeft={() => navigation.pop()}
          label="카테고리 선택"
        />
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
                  <MaterialCommunityIcons
                    size={20}
                    name="arrow-down-drop-circle"
                    style={{
                      color:
                        index === currentIndex ? '#FA6400' : 'rgba(0,0,0,0.3)',
                      transform: [
                        { rotate: index === currentIndex ? '180deg' : '0deg' },
                      ],
                    }}
                  />
                </View>
                {index === currentIndex && (
                  <View style={styles.subCategoriesList}>
                    {subCategories.map((subCategory) => (
                      <TouchableHighlight
                        activeOpacity={0.1}
                        underlayColor="rgba(250, 100, 0, 0.1)"
                        key={subCategory}
                        onPress={() => {
                          if (type === 'ADD') {
                            navigation.navigate('ItemAddForm', {
                              category,
                              subCategory,
                            });
                          } else if (type === 'MODIFY') {
                            navigation.navigate('ItemStack', {
                              screen: 'ItemModifyForm',
                              params: {
                                category,
                                subCategory,
                              },
                            });
                          }
                        }}
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
    backgroundColor: '#FEFFFE',
  },
  cardContainer: {
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  header: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 16,
  },
  body: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  subCategoriesList: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
});

export default SelectCategory;
