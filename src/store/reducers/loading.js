import { loadingActionTypes as types } from '../constants/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case types.START_LOADING:
      return {
        ...state,
        [action.payload]: true,
      };
    case types.FINISH_LOADING:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
};

export default loading;
