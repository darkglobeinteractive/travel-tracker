import { TRIP_FETCHED } from './types';
import loadComplete from './loadComplete';
import fetchTravelDate from './fetchTravelDate';
import populateTravelDates from './populateTravelDates';
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

  // Call the /posts/ endpoint using the 'include' parameter which is a string of comma-separated IDs to request
  ZerodegreesK.get('/posts/',{
    params: {
      include: trip_dates_ids.join(),
      per_page: 100,
      _fields: 'id, title.rendered, acf.content_tldr, start_end_dates, thumbnail_image, acf.travel_next_post, acf.travel_previous_post'
    }
  }).then((res) => {
    console.log(res.data);
    // Create an array of objects including the necessary information for each travel date
    const travel_dates = res.data.map(date => {
      return {
        id: date.id,
        title: date.title.rendered,
        tldr: date.acf.content_tldr,
        start_end_dates: date.start_end_dates,
        thumbnail_image: date.thumbnail_image,
        next_date: date.acf.travel_next_post,
        prev_date: date.acf.travel_previous_post
      }
    });

    // Dispatch the populateTravelDates action creator to populate the travel_dates state object
    dispatch(populateTravelDates(travel_dates));

  }).then(() => {

    // Finally, dispatch the loadComplete action creator to indicate that the app is ready to go
    dispatch(loadComplete());

  });

}

export default fetchTrip;
