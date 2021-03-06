import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Button, AuthUserContext } from '../../Components';
import {
  CustomTextInput,
  Header,
  Footer,
  KeyboardAwareView,
  LoginSchema,
} from '../Components';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/actions/auth';

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    dispatch(signIn(values));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <KeyboardAwareView>
        <View style={styles.inner}>
          <Text style={styles.title}>로그인</Text>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => handleSignIn(values)}
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: 280,
                    marginTop: 8,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'SFPro-Text-Regular',
                      fontSize: 14,
                      color: '#2c2c2c',
                    }}
                  >
                    비밀번호를 잊어버렸나요?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}
                  >
                    <Text
                      style={{
                        fontFamily: 'SFPro-Text-Regular',
                        fontSize: 14,
                        color: '#FA6400',
                      }}
                    >
                      비밀번호 찾기
                    </Text>
                  </TouchableOpacity>
                </View>
                <Button
                  variant="primary"
                  label="로그인"
                  onPress={handleSubmit}
                  style={{ marginTop: 24 }}
                />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareView>
      <Footer
        label="계정이 없으신가요?"
        btnLabel="회원가입"
        navigation={navigation}
        navigate="Signup"
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 32,
    lineHeight: 40,
    marginBottom: 8,
    color: '#2c2c2c',
  },
});

export default SignIn;
