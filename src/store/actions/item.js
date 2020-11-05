import { itemActionTypes as types } from '../constants/ActionTypes';

export const getItems = (userToken) => ({
  type: types.GET_ITEMS,
  payload: { userToken },
});

export const addItem = (userToken, itemInfo) => ({
  type: types.ADD_ITEM,
  payload: {
    userToken,
    itemInfo,
  },
});

export const removeItem = (userToken, itemInfo) => ({
  type: types.REMOVE_ITEM,
  payload: { userToken, itemInfo },
});

export const modifyItem = (userToken, itemInfo) => ({
  type: types.MODIFY_ITEM,
  payload: {
    userToken,
    itemInfo,
  },
});
