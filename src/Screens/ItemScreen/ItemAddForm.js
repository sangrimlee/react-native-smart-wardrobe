import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import { TextButton } from '../../Components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AddImageButton } from './Components';

const Header = ({ onPress }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 16,
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.4)',
      }}
    >
      <TextButton
        label="취소"
        color="#2c2c2c"
        onPress={() => navigation.goBack()}
      />
      <TextButton label="완료" color="#FA6400" onPress={() => onPress()} />
    </View>
  );
};

const CustomTextInput = ({
  onChangeText,
  onBlur,
  value,
  placeholder,
  multiline,
}) => {
  const height = multiline ? 200 : 40;
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={{ ...styles.input, height }}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor="rgba(0,0,0,0.3)"
        multiline={multiline}
        maxLength={150}
      />
    </View>
  );
};

const ItemAddForm = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const [category, setCategory] = useState(null);
  useEffect(() => {
    if (route.params?.category) {
      console.log(route.params?.category);
      setCategory(route.params.category);
    }
  }, [route.params?.category]);

  return (
    <View style={{ ...styles.container, marginTop: insets.top }}>
      <Formik
        initialValues={{
          name: '',
          brand: '',
          imageUrl: '',
          category: {},
          description: '',
        }}
        onSubmit={(values) => {
          if (category) {
            values.category = category;
            console.log(values);
          } else {
            alert('카테고리를 선택하세요.');
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Header onPress={handleSubmit} />
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              style={styles.formContainer}
            >
              <AddImageButton />
              <CustomTextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="옷 이름"
              />
              <View style={styles.pickerContainer}>
                <TouchableOpacity
                  style={styles.picker}
                  onPress={() =>
                    navigation.navigate('ItemStack', {
                      screen: 'SelectCategory',
                    })
                  }
                >
                  <Text style={styles.pickerText}>
                    {category
                      ? `${category.category} > ${category.subCategory}`
                      : '카테고리 선택'}
                  </Text>
                  <Ionicons name="ios-arrow-forward" size={16} color="black" />
                </TouchableOpacity>
              </View>

              <CustomTextInput
                onChangeText={handleChange('brand')}
                onBlur={handleBlur('brand')}
                value={values.brand}
                placeholder="브랜드 (선택사항)"
              />
              <CustomTextInput
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                multiline
                placeholder="옷에 대한 메모를 적어주세요. (선택사항, 최대 150자)"
              />
            </KeyboardAvoidingView>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 15,
    height: 40,
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
