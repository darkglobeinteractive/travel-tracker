import { APP_READY } from './types';

// The readyCheck action creator checks to see if the travel date that was just added is the active date
const readyCheck = (date_id, active_id) => (dispatch) => {

  if (date_id === active_id) {
    dispatch({
      type: APP_READY
    });
  }

}

export default readyCheck;
