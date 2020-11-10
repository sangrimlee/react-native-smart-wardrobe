import { itemActionTypes as types } from '../constants/ActionTypes';
import { finishLoading, startLoading } from '../actions/loading';
import { fork, all, call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../lib/itemApi';
import {
  changeFormat,
  changeFormatList,
  changeModifiedFormat,
} from '../lib/functions';

function* getItemsSaga(action) {
  yield put(startLoading(types.GET_ITEMS));
  try {
    const { userToken } = action.payload;
    const response = yield call(api.getItemsApi, userToken);
    if (response.data.status) {
      const { items } = response.data;
      const itemList = changeFormatList(items);
      yield put({
        type: types.GET_ITEMS_SUCCESS,
        payload: { itemList },
      });
    }
  } catch (e) {
    yield put({ type: types.GET_ITEMS_FAILURE, payload: e, error: true });
  }
  yield put(finishLoading(types.GET_ITEMS));
}

function* addItemSaga(action) {
  yield put(startLoading(types.ADD_ITEM));
  try {
    const { userToken, itemInfo } = action.payload;

    const response = yield call(api.addItemApi, userToken, itemInfo);
    if (response.data.status) {
      const { item } = response.data;
      const newItemInfo = {
        ...itemInfo,
        id: item.id,
        imageUrl: item.url,
      };
      yield put({
        type: types.ADD_ITEM_SUCCESS,
        payload: { itemInfo: newItemInfo },
      });
    }
  } catch (e) {
    yield put({ type: types.ADD_ITEM_FAILURE, payload: e, error: true });
  }
  yield put(finishLoading(types.ADD_ITEM));
}

function* modifyItemSaga(action) {
  yield put(startLoading(types.MODIFY_ITEM));
  try {
    const { userToken, itemInfo } = action.payload;
    yield call(api.modifyItemApi, userToken, itemInfo);
    const newItemInfo = changeModifiedFormat(itemInfo);
    console.log(newItemInfo);
    yield put({
      type: types.MODIFY_ITEM_SUCCESS,
      payload: { itemInfo: newItemInfo },
    });
  } catch (e) {
    yield put({ type: types.MODIFY_ITEM_FAILURE, payload: e, error: true });
  }
  yield put(finishLoading(types.MODIFY_ITEM));
}

function* removeItemSaga(action) {
  yield put(startLoading(types.REMOVE_ITEM));
  try {
    const { userToken, itemInfo } = action.payload;
    const response = yield call(api.removeItemApi, userToken, itemInfo);
    yield put({
      type: types.REMOVE_ITEM_SUCCESS,
      payload: { itemInfo },
    });
  } catch (e) {
    yield put({ type: types.REMOVE_ITEM_FAILURE, payload: e, error: true });
  }
  yield put(finishLoading(types.REMOVE_ITEM));
}

function* watchItem() {
  yield takeLatest(types.GET_ITEMS, getItemsSaga);
  yield takeLatest(types.ADD_ITEM, addItemSaga);
  yield takeLatest(types.MODIFY_ITEM, modifyItemSaga);
  yield takeLatest(types.REMOVE_ITEM, removeItemSaga);
}

export default function* itemSaga() {
  yield all([fork(watchItem)]);
}
