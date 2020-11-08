import { recommendActionTypes as types } from '../constants/ActionTypes';

export const getWeatherInfo = (location) => ({
  type: types.GET_WEATHER_INFO,
  payload: { location },
});

export const getRecommendationList = (
  userToken,
  feelTemp,
  userStyle,
  userGender,
) => ({
  type: types.GET_RECOMMENDATION_LIST,
  payload: {
    userToken,
    feelTemp,
    userStyle,
    userGender,
  },
});
