import { itemActionTypes as types } from '../constants/ActionTypes';
import produce from 'immer';
const initialState = {
  itemList: [],
};

const item = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEMS_SUCCESS:
      return produce(state, (draft) => {
        draft.itemList = action.payload.itemList;
      });

    case types.ADD_ITEM_SUCCESS:
      return produce(state, (draft) => {
        draft.itemList.push(action.payload.itemInfo);
      });

    case types.MODIFY_ITEM_SUCCESS:
      return produce(state, (draft) => {
        const index = draft.itemList.findIndex(
          (item) =>
            item.id === action.payload.itemInfo.id &&
            item.subCategory === action.payload.itemInfo.subCategory,
        );
        draft.itemList[index] = action.payload.itemInfo;
      });
    case types.REMOVE_ITEM_SUCCESS:
      return produce(state, (draft) => {
        console.log(draft);
        const index = draft.itemList.findIndex(
          (item) =>
            item.id === action.payload.itemInfo.id &&
            item.subCategory === action.payload.itemInfo.subCategory,
        );
        if (index !== -1) draft.itemList.splice(index, 1);
      });
    case types.GET_ITEMS_FAILURE:
    case types.ADD_ITEM_FAILURE:
    case types.MODIFY_ITEM_FAILURE:
    case types.REMOVE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default item;
