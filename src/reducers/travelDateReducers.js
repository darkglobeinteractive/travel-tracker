import { DATE_FETCHED, POPULATE_TRAVEL_DATES } from '../actions/types';

export default (travel_dates = [], action) => {

  // POTENTIONAL CLEAN-UP: Originally I was fetching each date individually. POPULATE_TRAVEL_DATES does it all at once
  if (action.type === DATE_FETCHED) {
    return [...travel_dates, action.payload];

  // Populage the travel_dates state object
  } else if (action.type === POPULATE_TRAVEL_DATES) {
    return action.payload;

  // Else default...
  } else {
    return travel_dates;
  }

}
