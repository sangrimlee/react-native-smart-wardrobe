import { loadingActionTypes as types } from '../constants/ActionTypes';

export const startLoading = (requestType) => ({
  type: types.START_LOADING,
  payload: requestType,
});

export const finishLoading = (requestType) => ({
  type: types.FINISH_LOADING,
  payload: requestType,
});
