import { all, fork } from 'redux-saga/effects';
import authSaga from './auth';
import itemSaga from './item';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(itemSaga)]);
}
