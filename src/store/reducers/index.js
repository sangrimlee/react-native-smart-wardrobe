import { combineReducers } from 'redux';
import auth from './auth';
import item from './item';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  item,
  loading,
});

export default rootReducer;
