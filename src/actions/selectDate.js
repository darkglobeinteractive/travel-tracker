import { SELECT_DATE } from './types';

// This action creator will update the global.active_date ID, updating state and re-rendering the app
const selectDate = (id) => {
  return {
    type: SELECT_DATE,
    payload: id
  }
}

export default selectDate;
