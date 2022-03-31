import React from 'react';

class TravelDateListItem extends React.Component {

  render() {
    return (
      <div className="item">
        <div className="info">
          <div className="title">{this.props.travel_date.title}</div>
          <div className="dates">{this.props.travel_date.start_end_dates}</div>
          <div className="tldr">{this.props.travel_date.tldr}</div>
        </div>
        <div className="thumb">
          <img src={this.props.travel_date.thumbnail_image} />
        </div>
      </div>
    );
  }

}

export default TravelDateListItem;
