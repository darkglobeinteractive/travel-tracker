import { DATE_FETCHED, GALLERY_IMAGES_FETCHED, GALLERY_VIDEOS_FETCHED, RESET_ACTIVE_DATE } from '../actions/types';

const INITIAL_DATA = {
  content: '',
  images_check: false, // Allows me to add a spinner in place of the images gallery while images are fetched
  images: {},
  videos_check: false, // Not needed at the moment, but might be in the future if I use the Vimeo API to fetch video thumbnails
  videos: {}
}

export default (active_date = INITIAL_DATA, action) => {

  if (action.type === DATE_FETCHED) {

    // Here we use lodash to create an object whose keys are the ID of the travel date
    return {...active_date, content: action.payload.content, images_check: action.payload.images_check, videos_check: action.payload.videos_check}

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
