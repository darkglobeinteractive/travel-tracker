import React from 'react';

import Spinner from './Spinner';

const TravelDateContent = ({ content }) => {
  if (content === '') {
    return <Spinner message="Fetching Content" />
  }
  return (
    <div className="full-content" dangerouslySetInnerHTML={{__html: content}} />
  )
}

export default TravelDateContent;
