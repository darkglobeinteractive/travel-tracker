import { DATE_FETCHED } from './types';
import ZerodegreesK from '../apis/zerodegreesk';
import readyCheck from './readyCheck';

// We call this action creator once for each travel date ID
const fetchTravelDate = (date_id, active_id) => async (dispatch) => {

  const travel_date = await ZerodegreesK.get(`/posts/${date_id}`, {
    params: {
      _fields: 'id, title'
    }
  });

  dispatch({
    type: DATE_FETCHED,
    payload: {
      id: travel_date.data.id,
      title: travel_date.data.title.rendered
    }
  });

  // Dispatch the readyCheck action creator to see if this travel date is the active travel date
  dispatch(readyCheck(date_id, active_id));

}

export default fetchTravelDate;
