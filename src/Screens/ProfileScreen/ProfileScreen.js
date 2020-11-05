import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileImage from './ProfileImage';
import SignOutButton from './SignOutButton';
import { IconHeader } from '../Components/Header';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <View style={styles.container}>
      <IconHeader leftName="close" border />
      {/* <View style={styles.imageContainer}>
                <ProfileImage />
            </View> */}
      <View style={styles.menuContainer}>
        <Text style={styles.email}>{userInfo.userEmail}</Text>
        <Text style={styles.text}>사용자 이름 : {userInfo.userName}</Text>
        <Text style={styles.text}>성별 : {userInfo.userGender}</Text>
        <Text style={styles.text}>로그아웃</Text>
        <SignOutButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  email: {
    fontFamily: 'SFPro-Text-Regular',
    fontSize: 18,
  },
  text: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 24,
  },
});

export default ProfileScreen;
