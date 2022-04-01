import React from 'react';

const TravelDateBanner = ({ src, align }) => {
  if (src === '') {
    return <></>;
  }
  const bannerStyle = {
    backgroundImage: 'url('+src+')',
    backgroundPosition: align
  }
  return (
    <div id="banner" style={bannerStyle}></div>
  );
}

export default TravelDateBanner;
