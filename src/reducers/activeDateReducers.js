import { DATE_FETCHED, GALLERY_IMAGES_FETCHED, GALLERY_VIDEOS_FETCHED, RESET_ACTIVE_DATE } from '../actions/types';

const INITIAL_DATA = {
  content: '',
  images: {},
  videos: {}
}

export default (active_date = INITIAL_DATA, action) => {

  if (action.type === DATE_FETCHED) {

    // Here we use lodash to create an object whose keys are the ID of the travel date
    return {...active_date, content: action.payload}

  } else if (action.type === GALLERY_IMAGES_FETCHED) {
    return {...active_date, images: action.payload}

  } else if (action.type === GALLERY_VIDEOS_FETCHED) {
    return {...active_date, videos: action.payload}

  } else if (action.type === RESET_ACTIVE_DATE) {
    return INITIAL_DATA;

  // Else default...
  } else {
    return active_date;
  }

}
