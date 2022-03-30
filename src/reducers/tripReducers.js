import { TRIP_FETCHED } from '../actions/types';

const INITIAL_DATA = {
  title: '',
  link: '',
  dates: []
}

export default (trip = INITIAL_DATA, action) => {
  if (action.type === TRIP_FETCHED) {
    return action.payload;
  } else {
    return trip;
  }
}
