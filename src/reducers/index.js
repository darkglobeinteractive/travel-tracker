import { combineReducers } from 'redux';
import globalStateReducers from './globalStateReducers';

export default combineReducers({
  global: globalStateReducers
});
