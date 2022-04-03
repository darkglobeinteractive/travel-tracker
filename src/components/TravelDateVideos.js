import React from 'react';
import _ from 'lodash';

import Spinner from './Spinner';
import TravelDateVideosItem from './TravelDateVideosItem';

class TravelDateVideoGallery extends React.Component {

  render() {
    if (Object.keys(this.props.items).length === 0) {
      return <Spinner message="Loading Videos" />
    }
    return (
      <div className="expander video-gallery">
        <div className="expander-header">
          <h2 className="title">Video Gallery</h2>
          <div className="toggle">
            <button>Toggle Gallery</button>
          </div>
        </div>
        <div className="expander-content">
          <div className="wrap">
            {_.values(this.props.items).map((video,index) => {
              return (
                <TravelDateVideosItem key={index} video={video} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

}

export default TravelDateVideoGallery;
