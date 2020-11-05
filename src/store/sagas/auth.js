import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { authActionTypes as types } from '../constants/ActionTypes';
import { startLoading, finishLoading } from '../actions/loading';
import * as api from '../lib/authApi';
import AsyncStorage from '@react-native-community/async-storage';

function* signInSaga(action) {
  try {
    const { signInData } = action.payload;
    const response = yield call(api.signInApi, signInData);
    if (response.data.status) {
      const userToken = response.data.token;
      yield AsyncStorage.setItem('userToken', userToken);
      yield put({ type: types.SIGN_IN_SUCCESS, payload: { userToken } });
    }
  } catch (e) {
    yield put({ type: types.SIGN_IN_FAILURE, payload: e, error: true });
  }
}

function* signUpSaga(action) {
  try {
    const { signUpData } = action.payload;
    const response = yield call(api.signUpApi, signUpData);
    if (response.data.status) {
      yield put({ type: types.SIGN_UP_SUCCESS });
    }
  } catch (e) {
    yield put({ type: types.SIGN_UP_FAILURE, payload: e, error: true });
  }
}

function* signOutSaga() {
  try {
    yield AsyncStorage.removeItem('userToken');
    yield put({ type: types.SIGN_OUT_SUCCESS });
  } catch (e) {
    yield put({ type: types.SIGN_OUT_FAILURE, payload: e, error: true });
  }
}

function* getUserInfoSaga(action) {
  yield put(startLoading(types.GET_USER_INFO));
  try {
    const { userToken } = action.payload;
    const response = yield call(api.getUserInfoApi, userToken);
    if (response.data.status) {
      const userInfo = {
        userEmail: response.data.user.email,
        userName: response.data.user.nickname,
        userGender: response.data.user.sex,
      };
      yield put({
        type: types.GET_USER_INFO_SUCCESS,
        payload: {
          userToken,
          userInfo,
        },
      });
    }
  } catch (e) {
    yield put({ type: types.GET_USER_INFO_FAILURE, payload: e, error: true });
  }
  yield put(finishLoading(types.GET_USER_INFO));
}

function* watchSignIn() {
  yield takeLatest(types.SIGN_IN, signInSaga);
  yield takeLatest(types.SIGN_OUT, signOutSaga);
}

function* watchSignUp() {
  yield takeLatest(types.SIGN_UP, signUpSaga);
}

function* watchGetUserInfo() {
  yield takeEvery(types.GET_USER_INFO, getUserInfoSaga);
}

export default function* authSaga() {
  yield all([fork(watchSignIn), fork(watchSignUp), fork(watchGetUserInfo)]);
}
