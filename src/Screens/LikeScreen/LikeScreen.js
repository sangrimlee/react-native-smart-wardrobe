import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';

const Header = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[styles.headerContainer, { marginTop: insets.top }]}>
      <MaterialCommunityIcons
        name="close"
        size={24}
        onPress={() => navigation.pop()}
      />
    </View>
  );
};

const EmptyView = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.decription}>
        계속해서 보길 원하는{'\n'}아이템 또는 코디를 추가하십시오.
      </Text>
    </View>
  );
};
const LikeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>나의 리스트</Text>
      </View>
      {/* LIST  */}
      <EmptyView />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFEFF',
    paddingHorizontal: 16,
  },
  titleContainer: {
    marginVertical: 8,
  },
  title: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 24,
  },
  decription: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default LikeScreen;
