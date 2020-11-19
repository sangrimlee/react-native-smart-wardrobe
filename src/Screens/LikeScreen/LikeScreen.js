import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LikeList from './LikeList';

const Header = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View>
      <View style={[styles.headerContainer, { marginTop: insets.top }]}>
        <MaterialCommunityIcons
          name="close"
          size={24}
          onPress={() => navigation.pop()}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>나의 리스트</Text>
      </View>
    </View>
  );
};

const LikeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <LikeList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEFF',
  },
  headerContainer: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  titleContainer: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 24,
  },
});

export default LikeScreen;
