import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Button = ({ iconName, title, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonConatiner} onPress={onPress}>
      <MaterialCommunityIcons
        style={styles.icon}
        name={iconName}
        size={32}
        color="black"
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const AddScreen = ({ navigation }) => {
  const mountAnimValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const mountAnim = () => {
      Animated.timing(mountAnimValue, {
        toValue: 1,
        duration: 550,
        useNativeDriver: true,
      }).start();
    };
    mountAnim();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.overLayContainer, { opacity: mountAnimValue }]}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.pop()}
        />
      </Animated.View>
      <SafeAreaView style={styles.modalContainer}>
        <Button
          iconName="cart-outline"
          title="쇼핑몰로부터 추가"
          description="쇼핑몰(무신사) 구매목록으로부터 옷을 추가"
          onPress={() => true}
        />
        <Button
          iconName="camera-outline"
          title="직접 추가"
          description="앨범 또는 카메라로부터 옷을 추가"
          onPress={() =>
            navigation.navigate('ItemStack', {
              screen: 'ItemAddForm',
            })
          }
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  overLayContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#FFF',
  },
  buttonConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderBottomColor: 'rgba(2,2,2,0.1)',
    borderBottomWidth: 0.5,
  },
  icon: {
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: 'SFPro-Text-Medium',
    fontSize: 17,
    color: '#020202',
    marginBottom: 4,
  },
  description: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 14,
    color: 'rgba(2,2,2,0.7)',
  },
});

export default AddScreen;
