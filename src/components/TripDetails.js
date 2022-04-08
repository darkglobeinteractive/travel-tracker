import React from 'react';

import '../css/TravelDate.css';
import TravelDateBanner from './TravelDateBanner';
import TravelDateContent from './TravelDateContent';

const TripContent = ({ trip }) => {

  // Create alignment for banner image
  const banner_align = trip.banner_align_horz+' '+trip.banner_align_vert;

  return (
    <div id="travel-date">
      <div className="wrap">
        <div className="standard-info">
          <TravelDateBanner src={trip.banner_image} align={trip.banner_align} />
          <h1 dangerouslySetInnerHTML={{__html: trip.title}} />
          <TravelDateContent content={trip.content} />
        </div>
      </div>
    </div>
  );
}

export default TripContent;
