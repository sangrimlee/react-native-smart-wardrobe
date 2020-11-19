import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconHeader } from '../Components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signOut } from '../../store/actions/auth';

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <View style={styles.container}>
      <IconHeader label="내 프로필" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFEFF',
        }}
      >
        <Text style={styles.email}>준비중입니다.</Text>
      </View>
      {/* <View style={styles.imageContainer}>
                <ProfileImage />
            </View> */}
      {/* <View style={styles.profileContainer}>
        <Text style={styles.email}>{userInfo.userEmail}</Text>
        <Text style={styles.text}>이름: {userInfo.userName}</Text>
        <Text style={styles.text}>
          성별: {userInfo.userGender === 'male' ? '남성' : '여성'}
        </Text>
        <TouchableOpacity onPress={handleSignOut}>
          <Text style={styles.text}>로그아웃</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#FFFEFF',
    padding: 16,
  },
  email: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 24,
    marginVertical: 16,
  },
  text: {
    fontFamily: 'SFPro-Text-Semibold',
    fontSize: 32,
    marginVertical: 8,
  },
});

export default ProfileScreen;
