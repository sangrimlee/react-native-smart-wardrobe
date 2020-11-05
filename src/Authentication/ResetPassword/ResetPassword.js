import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Button } from '../../Components';
import {
  Header,
  KeyboardAwareView,
  ResetPasswordSchema,
  CustomTextInput,
} from '../Components';
import { Formik } from 'formik';

const ResetPassword = ({ route, navigation }) => {
  const { email } = route.params;

  const handleResetPassword = (values, navigation) => {
    const { email, password } = values;
    fetch('http://3.21.245.113:8000/account/changepw', {
      method: 'POST',
      body: JSON.stringify({ email, newpw: password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status) {
          Alert.alert('변경 완료', '비밀번호가 변경되었습니다.');
          navigation.navigate('SignIn');
        }
        console.log(response);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <KeyboardAwareView>
        <View style={styles.inner}>
          <Text style={styles.title}>비밀번호 재설정</Text>
          <Text style={styles.description}>
            새롭게 사용할 비밀번호를 입력해주세요.
          </Text>
          <Formik
            initialValues={{
              email: email,
              password: '',
              confirmPassword: '',
            }}
            validationSchema={ResetPasswordSchema}
            onSubmit={(values) => handleResetPassword(values, navigation)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={{ alignItems: 'center' }}>
                <CustomTextInput
                  iconName="lock"
                  placeholder="비밀번호를 입력하세요."
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  autoCompleteType="password"
                  onBlur={handleBlur('password')}
                  touched={touched.password}
                  error={errors.password}
                />
                <CustomTextInput
                  iconName="lock"
                  placeholder="다시 비밀번호를 입력하세요."
                  onChangeText={handleChange('confirmPassword')}
                  secureTextEntry={true}
                  autoCompleteType="password"
                  onBlur={handleBlur('confirmPassword')}
                  touched={touched.confirmPassword}
                  error={errors.confirmPassword}
                />
                <Button
                  variant="primary"
                  label="비밀번호 재설정"
                  onPress={handleSubmit}
                  style={{ marginTop: 24 }}
                />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 24,
    color: '#2c2c2c',
  },
  description: {
    fontFamily: 'SFPro-Text-Regular',
    fontSize: 14,
    color: '#AAA',
  },
});

export default ResetPassword;
