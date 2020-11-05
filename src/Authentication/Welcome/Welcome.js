import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { Button } from '../../Components';

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>모바일 옷장을</Text>
        <Text style={styles.title}>만들어 볼까요?</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          label={'로그인'}
          variant={'primary'}
          onPress={() => navigation.navigate('SignIn')}
        />
        <Button
          label={'회원가입'}
          onPress={() => navigation.navigate('Signup')}
        />
        <Button
          label={'비밀번호 찾기'}
          onPress={() => navigation.navigate('ForgotPassword')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 24,
    height: '60%',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 48,
  },
  title: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 32,
    lineHeight: 36,
    color: '#2c2c2c',
    textAlign: 'left',
  },
});

export default Welcome;
