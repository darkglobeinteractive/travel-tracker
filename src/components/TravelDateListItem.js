import React from 'react';
import { connect } from 'react-redux';
import { selectDate } from '../actions/index';

class TravelDateListItem extends React.Component {

  render() {
    return (
      <div className="item">
        <div className="info">
          <div className="title">{this.props.travel_date.title}</div>
          <div className="dates">{this.props.travel_date.start_end_dates}</div>
          <div className="tldr">{this.props.travel_date.tldr}</div>
          <div className="button"><button onClick={() => this.props.selectDate(this.props.travel_date.id)}>View Day</button></div>
        </div>
        <div className="thumb">
          <img src={this.props.travel_date.thumbnail_image} />
        </div>
      </div>
    );
  }

}

export default connect(null, { selectDate })(TravelDateListItem);
