import { POPULATE_TRAVEL_DATES } from './types';

const populateTravelDates = travel_dates => {
  return {
    type: POPULATE_TRAVEL_DATES,
    payload: travel_dates
  }
}

export default populateTravelDates;
