import axios from 'axios';
const BASE_URL = 'http://3.21.245.113:8000/account';

export const signInApi = (signInData) => {
  return axios.post(BASE_URL + '/login', signInData);
};

export const signUpApi = (signUpData) => {
  return axios.post(BASE_URL + '/reg', signUpData);
};

export const signOutApi = () => {};

export const getUserInfoApi = (userToken) => {
  return axios.post('http://3.21.245.113:8000/clothes/allinfo', {
    token: userToken,
  });
};
