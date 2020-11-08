import { combineReducers } from 'redux';
import auth from './auth';
import item from './item';
import loading from './loading';
import recommend from './recommend';

const rootReducer = combineReducers({
  auth,
  item,
  loading,
  recommend,
});

export default rootReducer;
