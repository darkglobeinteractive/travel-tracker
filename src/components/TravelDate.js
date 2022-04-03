import React from 'react';
import { connect } from 'react-redux';
import { fetchActiveDate } from '../actions';

import '../css/TravelDate.css';
import TravelDateBanner from './TravelDateBanner';
import TravelDateContent from './TravelDateContent';
import TravelDateImages from './TravelDateImages';
import TravelDateVideos from './TravelDateVideos';
import TravelDatePlaces from './TravelDatePlaces';

class TravelDate extends React.Component {

  componentDidMount() {
    this.props.fetchActiveDate(this.props.id);
  }

  renderImageGallery(images_check, images) {
    if (images_check) {
      return <TravelDateImages items={images} />
    }
  }

  renderVideoGallery(videos_check, videos) {
    if (videos_check) {
      return <TravelDateVideos items={videos} />
    }
  }

  render() {

    // Default travel date info stored in the travel_dates state object
    const td = this.props.travel_date;
    const title = td.title;
    const dates = td.start_end_dates;
    const tldr = td.tldr;
    const date_next = td.next_date;
    const date_prev = td.prev_date;
    const banner_img = td.banner_image;
    const banner_align = td.banner_align_horz+' '+td.banner_align_vert;

    // Recently fetched active_date state object info
    const ad = this.props.active_date;
    const full_content = ad.content;
    const images_check = ad.images_check;
    const images = ad.images;
    const videos_check = ad.videos_check;
    const videos = ad.videos;

    return (
      <div id="travel-date">
        <div className="wrap">
          <div className="standard-info">
            <TravelDateBanner src={banner_img} align={banner_align} />
            <h1 dangerouslySetInnerHTML={{__html: title}} />
            <div className="dates">{dates}</div>
            <div className="tldr" dangerouslySetInnerHTML={{__html: tldr}} />
            <TravelDateContent content={full_content} />
          </div>
          {this.renderImageGallery(images_check, images)}
          {this.renderVideoGallery(videos_check, videos)}
          <TravelDatePlaces />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    active_date: state.active_date,
    travel_date: state.travel_dates[ownProps.id]
  }
}

export default connect(mapStateToProps, { fetchActiveDate })(TravelDate);
