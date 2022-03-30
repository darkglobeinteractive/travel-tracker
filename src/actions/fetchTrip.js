import { TRIP_FETCHED } from './types';
import loadComplete from './loadComplete';
import fetchTravelDate from './fetchTravelDate';
import ZerodegreesK from '../apis/zerodegreesk';

// The fetchTrip action creator with fetch the basic trip information as well as the trip dates array
const fetchTrip = () => async (dispatch, getState) => {

  async function processTravelDates(travel_date_ids) {
    for (const date_id of travel_date_ids) {
      await dispatch(fetchTravelDate(date_id, trip_dates_ids[0]));
    }
    dispatch(loadComplete());
  }

  // Fetch trip information
  const trip = await ZerodegreesK.get('/trip/341',{});

  const trip_dates_ids = trip.data.acf.travel_dates.reverse().map(date => {
    return date.travel_date;
  });

  // Dispatch the action to populate trip state object
  dispatch({
    type: TRIP_FETCHED,
    payload: {
      title: trip.data.title.rendered,
      link: trip.data.link,
      dates: trip_dates_ids
    }
  });

  // Call the fetchTravelDate action creator for each ID in the travel dates array
  processTravelDates(trip_dates_ids);

}

export default fetchTrip;
