import React from 'react';

const TravelDateVideosItem = ({ video }) => {
  return (
    <div className="item cols-2">
      <a href={`https://vimeo.com/${video.id}`} target="_blank" className="wrap">
        <span className="image">
          [[thumbnail]]
        </span>
        <span className="info">
          <span className="title">{video.title}</span>
          {video.caption &&
            <span className="caption">{video.caption}</span>
          }
        </span>
      </a>
    </div>
  )
}

export default TravelDateVideosItem;
