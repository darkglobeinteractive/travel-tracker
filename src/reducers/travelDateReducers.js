import { DATE_FETCHED } from '../actions/types';

export default (travel_dates = [], action) => {

  // Add the newly fetched date to the travel_dates state object
  if (action.type === DATE_FETCHED) {
    return [...travel_dates, action.payload];

  // Else default...
  } else {
    return travel_dates;
  }

}
