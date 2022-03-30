import { combineReducers } from 'redux';
import globalStateReducers from './globalStateReducers';
import travelDateReducers from './travelDateReducers';
import tripReducers from './tripReducers';

export default combineReducers({
  global: globalStateReducers,
  trip: tripReducers,
  travel_dates: travelDateReducers
});
