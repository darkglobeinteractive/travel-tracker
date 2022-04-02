import React from 'react';

const TravelDateImagesItem = ({ image }) => {
  return (
    <div className={`item cols-${image.columns}`}>
      <a href={image.fullsize} target="_blank" className="wrap">
        <span className="image bg" style={{backgroundImage: `url(${image.thumbnail})`}}>
          <img src={image.thumbnail} alt={image.title} />
        </span>
        <span className="info">
          <span className="title">{image.title}</span>
          {image.caption &&
            <span className="caption">{image.caption}</span>
          }
        </span>
      </a>
    </div>
  )
}

export default TravelDateImagesItem;
