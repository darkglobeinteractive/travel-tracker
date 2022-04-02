import React from 'react';
import _ from 'lodash';

import TravelDateImagesItem from './TravelDateImagesItem';

class TravelDateImageGallery extends React.Component {

  render() {

    if (Object.keys(this.props.items).length === 0) {
      return (
        <></>
      );
    }

    return (
      <div className="expander image-gallery">
        <div className="expander-header">
          <h2 className="title">Image Gallery</h2>
          <div className="toggle">
            <button>Toggle Gallery</button>
          </div>
        </div>
        <div className="expander-content">
          <div className="wrap">
            {_.values(this.props.items).map((image,index) => {
              return (
                <TravelDateImagesItem key={index} image={image} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

}

export default TravelDateImageGallery;
