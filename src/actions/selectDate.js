import { RESET_ACTIVE_DATE, SELECT_DATE } from './types';
import fetchActiveDate from './fetchActiveDate';

// This action creator will update the global.active_date ID, updating state and re-rendering the app
const selectDate = (id) => dispatch => {

  dispatch({
    type: RESET_ACTIVE_DATE
  });

  dispatch({
    type: SELECT_DATE,
    payload: id
  });

  dispatch(fetchActiveDate(id));

}

export default selectDate;
