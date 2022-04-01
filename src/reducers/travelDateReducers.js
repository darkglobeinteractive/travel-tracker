import { DATE_FETCHED, POPULATE_TRAVEL_DATES } from '../actions/types';
import _ from 'lodash';

// We use lodash to convert the travel dates array-of-objects into an object of objects that are keyed using the ID from each travel date object
// This will allow us to pull them directly using the id in the TravelDate.js component
export default (travel_dates = {}, action) => {

  // POTENTIONAL CLEAN-UP: Originally I was fetching each date individually. POPULATE_TRAVEL_DATES does it all at once
  if (action.type === DATE_FETCHED) {
    return [...travel_dates, action.payload];

  // Populate the travel_dates state object
  } else if (action.type === POPULATE_TRAVEL_DATES) {

    // Here we use lodash to create an object whose keys are the ID of the travel date
    return _.mapKeys(action.payload, 'id');

  // Else default...
  } else {
    return travel_dates;
  }

}
