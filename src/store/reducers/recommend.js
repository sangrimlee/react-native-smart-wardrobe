import { recommendActionTypes as types } from '../constants/ActionTypes';

export const initialState = {
  weatherInfo: {},
  recommendationList: [],
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WEATHER_INFO_SUCCESS:
      return {
        ...state,
        weatherInfo: action.payload.weatherInfo,
      };
    case types.GET_RECOMMENDATION_LIST_SUCCESS:
      return {
        ...state,
        recommendationList: action.payload.recommendationList,
      };
    case types.GET_WEATHER_INFO_FAILURE:
    case types.GET_RECOMMENDATION_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
