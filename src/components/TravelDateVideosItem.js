import React from 'react';

const TravelDateVideosItem = ({ video }) => {
  return (
    <div className="item video-embed">
      <span className="wrap">
        <span className="image">
          <iframe src={`https://player.vimeo.com/video/${video.id}?color=FFF&title=0&byline=0&portrait=0`} allow="autoplay; fullscreen"></iframe>
        </span>
        <span className="info">
          <span className="title">{video.title}</span>
          {video.caption &&
            <span className="caption">{video.caption}</span>
          }
        </span>
      </span>
    </div>
  )
}

export default TravelDateVideosItem;
