import { TRIP_FETCHED } from './types';
import loadComplete from './loadComplete';
import populateTravelDates from './populateTravelDates';
import ZerodegreesK from '../apis/zerodegreesk';

// The fetchTrip action creator with fetch the basic trip information as well as the trip dates array
const fetchTrip = () => async (dispatch, getState) => {

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
      content: trip.data.content.rendered,
      link: trip.data.link,
      dates: trip_dates_ids
    }
  });

  // Call the /posts/ endpoint using the 'include' parameter which is a string of comma-separated IDs to request
  ZerodegreesK.get('/posts/',{
    params: {
      include: trip_dates_ids.join(),
      per_page: 100,
      _fields: 'id, title.rendered, acf.content_tldr, start_end_dates, thumbnail_image, acf.travel_next_post, acf.travel_previous_post, banner_image, acf.header_horizontal_alignment, acf.header_vertical_alignment'
    }
  }).then((res) => {
    // Create an array of objects including the necessary information for each travel date
    const travel_dates = res.data.map(date => {
      return {
        id: date.id,
        title: date.title.rendered,
        tldr: date.acf.content_tldr,
        start_end_dates: date.start_end_dates,
        thumbnail_image: date.thumbnail_image,
        banner_image: date.banner_image,
        banner_align_horz: date.acf.header_horizontal_alignment,
        banner_align_vert: date.acf.header_vertical_alignment,
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
