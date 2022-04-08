import { TRIP_FETCHED } from '../actions/types';

const INITIAL_DATA = {
  title: '',
  link: '',
  content: '',
  banner_image: '',
  banner_align_horz: '',
  banner_align_vert: '',
  thumbnail_image: '',
  dates: []
}

export default (trip = INITIAL_DATA, action) => {
  if (action.type === TRIP_FETCHED) {
    return action.payload;
  } else {
    return trip;
  }
}
