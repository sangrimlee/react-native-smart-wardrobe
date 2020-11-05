import { authActionTypes as types } from '../constants/ActionTypes';

export const initialState = {
  userInfo: null,
  userToken: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        userToken: action.payload.userToken,
      };
    case types.SIGN_OUT_SUCCESS:
      return {
        ...state,
        userToken: null,
      };
    case types.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userToken: action.payload.userToken,
        userInfo: action.payload.userInfo,
      };
    case types.SIGN_IN_FAILURE:
    case types.SIGN_UP_FAILURE:
    case types.SIGN_OUT_FAILURE:
    case types.GET_USER_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
