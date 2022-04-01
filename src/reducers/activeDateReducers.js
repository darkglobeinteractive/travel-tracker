import { DATE_FETCHED, RESET_ACTIVE_DATE } from '../actions/types';

const INITIAL_DATA = {
  content: ''
}

export default (active_date = {}, action) => {

  if (action.type === DATE_FETCHED) {

    // Here we use lodash to create an object whose keys are the ID of the travel date
    return {...active_date, content: action.payload }

  } else if (action.type === RESET_ACTIVE_DATE) {
    return INITIAL_DATA;

  // Else default...
  } else {
    return active_date;
  }

}
