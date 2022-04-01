import React from 'react';

const TravelDateContent = ({ content }) => {
  if (content === '') {
    return <div>Fetching content...</div>;
  }
  return (
    <div className="full-content" dangerouslySetInnerHTML={{__html: content}} />
  )
}

export default TravelDateContent;
