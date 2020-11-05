import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Formik } from 'formik';
import { Button } from '../../Components';
import {
  KeyboardAwareView,
  Header,
  Footer,
  SignupSchema,
  CustomTextInput,
  SelectGender,
} from '../Components';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/actions/auth';

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSignUp = (values) => {
    dispatch(signUp(values));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <KeyboardAwareView>
        <View style={styles.inner}>
          <Text style={styles.title}>회원가입</Text>
          <Formik
            initialValues={{
              email: '',
              password: '',
              userName: '',
              userGender: 'male',
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
                  genderValue={values.userGender}
                  setGenderValue={setFieldValue}
                />
                <CustomTextInput
                  iconName="account-outline"
                  placeholder="이름"
                  onChangeText={handleChange('userName')}
                  onBlur={handleBlur('userName')}
                  touched={touched.userName}
                  error={errors.userName}
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
