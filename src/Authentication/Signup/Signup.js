import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Formik } from 'formik';
import { AuthUserContext, Button } from '../../Components';
import {
  KeyboardAwareView,
  Header,
  Footer,
  SignupSchema,
  CustomTextInput,
  SelectGender,
} from '../Components';

const Signup = ({ navigation }) => {
  const { signUp } = useContext(AuthUserContext);

  const handleSignUp = (values) => {
    const { name, email, password, gender } = values;
    const data = {
      nickname: name,
      email: email,
      pw: password,
      sex: gender,
    };
    fetch('http://3.21.245.113:8000/account/reg', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status) {
          Alert.alert('회원가입', '회원가입 되었습니다.');
          navigation.navigate('Login');
        } else {
          if (response.hasOwnProperty('email')) {
            Alert.alert('회원가입', '이미 존재하는 이메일입니다.');
          }
        }
        console.log(response);
      })
      .catch((error) => console.error('Error:', error));
    signUp();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <KeyboardAwareView>
        <View style={styles.inner}>
          <Text style={styles.title}>회원가입</Text>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              gender: 'male',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => handleSignUp(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              values,
              errors,
              touched,
            }) => (
              <View style={{ alignItems: 'center' }}>
                <SelectGender
                  genderValue={values.gender}
                  setGenderValue={setFieldValue}
                />
                <CustomTextInput
                  iconName="account-outline"
                  placeholder="이름"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  touched={touched.name}
                  error={errors.name}
                />
                <CustomTextInput
                  iconName="email-outline"
                  placeholder="이메일"
                  autoCompleteType="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  touched={touched.email}
                  error={errors.email}
                />
                <CustomTextInput
                  iconName="lock-outline"
                  placeholder="비밀번호"
                  secureTextEntry={true}
                  autoCompleteType="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  touched={touched.password}
                  error={errors.password}
                />

                <Button
                  variant="primary"
                  label="회원가입"
                  onPress={handleSubmit}
                  style={{ marginTop: 24 }}
                />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareView>
      <Footer
        label="계정이 있으신가요?"
        btnLabel="로그인"
        navigation={navigation}
        navigate="Login"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 32,
    lineHeight: 40,
    marginBottom: 8,
    color: '#0C0D34',
  },
});

export default Signup;
