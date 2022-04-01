import { DATE_FETCHED } from './types';
import ZerodegreesK from '../apis/zerodegreesk';

const fetchActiveDate = id => async (dispatch, getState) => {

  const travelDateContent = await ZerodegreesK.get(`/posts/${id}`, {
    params: {
      // _fields: 'content.rendered'
    }
  });

  console.log(travelDateContent);

  dispatch({
    type: DATE_FETCHED,
    payload: travelDateContent.data.content.rendered
  });

}

export default fetchActiveDate;
