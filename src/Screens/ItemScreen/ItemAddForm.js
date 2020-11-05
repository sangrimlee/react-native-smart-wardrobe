import React, { useEffect, useState, useContext } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { AddImageButton } from './Components';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/actions/item';
import { TextHeader } from '../Components/Header';

const CustomTextInput = (props) => {
  const height = props.multiline ? 320 : 40;
  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...props}
        style={{ ...styles.input, height, ...props.style }}
        placeholderTextColor="rgba(0,0,0,0.3)"
        autoCapitalize="none"
      />
    </View>
  );
};

const ItemAddForm = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const category = route.params?.category ?? '';
  const subCategory = route.params?.subCategory ?? '';
  const color = route.params?.color ?? '';
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);

  const handleSubmit = (values) => {
    const itemInfo = {
      ...values,
      category,
      subCategory,
      color,
    };
    if (values.imageUrl == '') {
      Alert.alert('이미지 선택', '아이템 이미지를 선택해주세요.');
    } else if (values.itemName == '') {
      Alert.alert('아이템 이름', '아이템 이름을 적어주세요.');
    } else if (category == '') {
      Alert.alert('카테고리 선택', '카테고리를 선택해주세요.');
    } else if (color == '') {
      Alert.alert('색 선택', '옷의 색상을 선택해주세요.');
    } else {
      dispatch(addItem(userToken, itemInfo));
      navigation.pop();
    }
  };

  return (
    <Formik
      initialValues={{
        itemName: '',
        imageUrl: '',
        brand: '',
        description: '',
      }}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
        <View style={styles.container}>
          <TextHeader
            leftLabel="취소"
            rightLabel="완료"
            handleLeft={() => navigation.pop()}
            handleRight={handleSubmit}
          />
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.formContainer}
          >
            <AddImageButton
              imageUrl={values.imageUrl}
              onChangeImage={(value) => setFieldValue('imageUrl', value)}
            />
            <CustomTextInput
              onChangeText={handleChange('itemName')}
              value={values.itemName}
              placeholder="옷 이름"
            />
            <View style={styles.pickerContainer}>
              <TouchableOpacity
                style={styles.picker}
                onPress={() =>
                  navigation.navigate('ItemStack', {
                    screen: 'SelectCategory',
                    params: {
                      type: 'ADD',
                    },
                  })
                }
              >
                <Text style={styles.pickerText}>
                  {category ? `${category} > ${subCategory}` : '카테고리 선택'}
                </Text>
                <Ionicons name="ios-arrow-forward" size={16} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.pickerContainer}>
              <TouchableOpacity
                style={styles.picker}
                onPress={() =>
                  navigation.navigate('ItemStack', {
                    screen: 'SelectColor',
                    params: {
                      type: 'ADD',
                    },
                  })
                }
              >
                <Text style={styles.pickerText}>
                  {color ? `${color}` : '색 선택'}
                </Text>
                <Ionicons name="ios-arrow-forward" size={16} color="black" />
              </TouchableOpacity>
            </View>

            <CustomTextInput
              onChangeText={handleChange('brand')}
              value={values.brand}
              placeholder="브랜드 (선택사항)"
            />
            <CustomTextInput
              onChangeText={handleChange('description')}
              value={values.description}
              multiline
              placeholder="옷에 대한 메모를 적어주세요. (선택사항, 최대 150자)"
              maxLength={150}
            />
          </KeyboardAvoidingView>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEFF',
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  inputContainer: {
    borderTopWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 8,
  },
  input: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 16,
    color: '#020202',
  },
  pickerContainer: {
    borderTopWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 8,
  },
  picker: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pickerText: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 16,
  },
});

export default ItemAddForm;
