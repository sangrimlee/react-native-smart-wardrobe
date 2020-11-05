import { authActionTypes as types } from '../constants/ActionTypes';

export const signIn = (values) => {
  const { email, password } = values;
  return {
    type: types.SIGN_IN,
    payload: {
      signInData: {
        email: email,
        pw: password,
      },
    },
  };
};

export const signUp = (values) => {
  const { email, password, userName, userGender } = values;
  return {
    type: types.SIGN_UP,
    payload: {
      signUpData: {
        email: email,
        pw: password,
        nickname: userName,
        sex: userGender,
      },
    },
  };
};

export const signOut = () => ({
  type: types.SIGN_OUT,
});

export const getUserInfo = (userToken) => ({
  type: types.GET_USER_INFO,
  payload: {
    userToken,
  },
});
