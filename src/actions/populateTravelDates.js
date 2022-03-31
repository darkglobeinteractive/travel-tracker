import { POPULATE_TRAVEL_DATES } from './types';

// This action creator populates the travel_dates state object with required info for all travel dates
const populateTravelDates = travel_dates => {
  return {
    type: POPULATE_TRAVEL_DATES,
    payload: travel_dates
  }
}

export default populateTravelDates;
