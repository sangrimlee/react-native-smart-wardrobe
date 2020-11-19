import { recommendActionTypes as types } from '../constants/ActionTypes';
import { finishLoading, startLoading } from '../actions/loading';
import { fork, all, call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../lib/recommendApi';
import { changeFormatRecommendationList } from '../lib/functions';

function* getWeatherInfoSaga(action) {
  yield put(startLoading(types.GET_WEATHER_INFO));
  try {
    const { location } = action.payload;
    const { data } = yield call(api.getWeatherInfoApi, location);
    const weatherInfo = {
      id: data.weather[0].id,
      temp: Math.floor(data.main.temp),
      description: data.weather[0].description,
      feelTemp: Math.floor(data.main.feels_like),
      windSpeed: data.wind.speed.toFixed(1),
    };
    yield put({
      type: types.GET_WEATHER_INFO_SUCCESS,
      payload: { weatherInfo },
    });
  } catch (e) {
    yield put({
      type: types.GET_WEATHER_INFO_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(types.GET_WEATHER_INFO));
}

function* getRecommendationListSaga(action) {
  yield put(startLoading(types.GET_RECOMMENDATION_LIST));
  try {
    const { data } = yield call(api.getRecommendationListApi, action.payload);
    const newRecommendationList = changeFormatRecommendationList(data);
    console.log(newRecommendationList);
    yield put({
      type: types.GET_RECOMMENDATION_LIST_SUCCESS,
      payload: {
        recommendationList: newRecommendationList,
      },
    });
  } catch (e) {
    yield put({
      type: types.GET_RECOMMENDATION_LIST_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(types.GET_RECOMMENDATION_LIST));
}
function* watchRecommend() {
  yield takeLatest(types.GET_WEATHER_INFO, getWeatherInfoSaga);
  yield takeLatest(types.GET_RECOMMENDATION_LIST, getRecommendationListSaga);
}

export default function* recommendSaga() {
  yield all([fork(watchRecommend)]);
}
