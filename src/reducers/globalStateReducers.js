import { APP_READY, LOAD_COMPLETE, SELECT_DATE, TRIP_FETCHED } from '../actions/types';

const INITIAL_STATE = {
  active_date: null,
  app_ready: false,
  load_complete: false

}

export default (globalState = INITIAL_STATE, action) => {

  // Once the trip has been fetched, set the global active_date based-on the most recent date ID
  if (action.type === TRIP_FETCHED) {
    return {...globalState, active_date: action.payload.dates[0]};

  // If we are selecting a new date, we are setting the active_date ID
  } else if (action.type === SELECT_DATE) {
    return {...globalState, active_date: action.payload};

  // This will be triggered when the active_date ID matches a travel date ID added in /actions/fetchTravelDate.js
  // This value is used to indicate that we can immediate start fetching the date to show on the page
  } else if (action.type === APP_READY) {
    return {...globalState, app_ready: true};

  // Load complete means that the length of trip.dates.length === travel_dates.length
  // This value is used to determine if we should show the menu button allowing people to navigate all trip dates
  } else if (action.type === LOAD_COMPLETE) {
    return {...globalState, load_complete: true};

  // Else initial state
  } else {
    return globalState;
  }
  
}
