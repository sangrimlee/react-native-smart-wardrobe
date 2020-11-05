import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '../../Components';
import { signOut } from '../../store/actions/auth';

const SignOutButton = () => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
  };
  return <Button label="로그아웃" variant="primary" onPress={handleSignOut} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignOutButton;
