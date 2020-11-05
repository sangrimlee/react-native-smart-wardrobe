import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { AppLoading } from 'expo';
import { useDispatch, useSelector } from 'react-redux';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { getUserInfo } from '../store/actions/auth';
import { authActionTypes as types } from '../store/constants/ActionTypes';
import { getItems } from '../store/actions/item';

const Routes = () => {
  const dispatch = useDispatch();
  const { auth, loading } = useSelector((state) => state);

  useEffect(() => {
    const getToken = async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          dispatch(getUserInfo(userToken));
          dispatch(getItems(userToken));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getToken();
  }, [getUserInfo, getItems]);

  if (loading[types.GET_USER_INFO]) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
      <StatusBar backgroundColor="#F2F2F2" barStyle="dark-content" />
      <NavigationContainer>
        {auth.userToken !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
};

export default Routes;
