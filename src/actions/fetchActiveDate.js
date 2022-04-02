import { DATE_FETCHED, GALLERY_IMAGES_FETCHED, GALLERY_VIDEOS_FETCHED } from './types';
import ZerodegreesK from '../apis/zerodegreesk';
import _ from 'lodash';

const fetchActiveDate = id => async (dispatch, getState) => {

  const travelDateContent = await ZerodegreesK.get(`/posts/${id}`, {
    params: {
      // _fields: 'acf.image_gallery, content.rendered'
    }
  });

  // Add the content immediately so the visitor can begin reading while images and/or videos load
  dispatch({
    type: DATE_FETCHED,
    payload: travelDateContent.data.content.rendered
  });

  // Check for image gallery items
  if (travelDateContent.data.acf.image_gallery.length > 0) {

    // Create an keyed object from the image_gallery array
    const gallery_images = _.mapKeys(travelDateContent.data.acf.image_gallery.map(image => {

      return {
        id: image.image_file,
        title: image.image_title,
        caption: image.image_caption,
        columns: image.image_columns,
        thumbnail: '',
        fullsize: ''
      }
    }), 'id');

    // Fetch the media items based-on the keys/ids of items in the gallery_images object we just created
    ZerodegreesK.get('/media/', {
      params: {
        include: _.keys(gallery_images).join(),
        per_page: 100
      }
    }).then((res) => {

      // Cycle through each item in the response and populate the image URL fields of the appropriate item in the gallery_images object
      for (const image of res.data) {
        const id = image.id;
        gallery_images[id]['thumbnail'] = image.media_details.sizes.full.source_url;
        gallery_images[id]['fullsize'] = image.source_url;
      }

      // Dispatch to populate images in the active_date state object
      dispatch({
        type: GALLERY_IMAGES_FETCHED,
        payload: gallery_images
      });

    });

  }

  // Check for video gallery items
  if (travelDateContent.data.acf.video_gallery.length > 0) {

    // Create an keyed object from the image_gallery array
    const gallery_videos = _.mapKeys(travelDateContent.data.acf.video_gallery.map(video => {
      return {
        id: video.video_id,
        title: video.video_title,
        caption: video.video_caption,
        location: video.video_location,
        type: video.video_type
      }
    }), 'id');

    // Dispatch to populate videos in the active_date state object
    dispatch({
      type: GALLERY_VIDEOS_FETCHED,
      payload: gallery_videos
    });

  }

}

export default fetchActiveDate;
