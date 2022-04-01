import { combineReducers } from 'redux';
import activeDateReducers from './activeDateReducers';
import globalStateReducers from './globalStateReducers';
import travelDatesReducers from './travelDatesReducers';
import tripReducers from './tripReducers';

export default combineReducers({
  active_date: activeDateReducers,
  global: globalStateReducers,
  trip: tripReducers,
  travel_dates: travelDatesReducers
});
