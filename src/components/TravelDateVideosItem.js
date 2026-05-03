import React from 'react';

const TravelDateVideosItem = ({ video }) => {
  return (
    <div className="item video-embed">
      <span className="wrap">
        <span className="image">
          
          <iframe src={`https://www.youtube.com/embed/${video.id}?si=NxbU3IsN6BZvDOKK`} title={`Video of ${video.title}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
