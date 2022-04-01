import React from 'react';
import { connect } from 'react-redux';
import { selectDate } from '../actions/index';

class MenuListItem extends React.Component {

  render() {

    const info = this.props.travel_date;

    return (
      <div className="item">
        <div className="info">
          <div className="title" dangerouslySetInnerHTML={{__html: info.title}} />
          <div className="dates">{info.start_end_dates}</div>
          <div className="tldr">{info.tldr}</div>
          <div className="button"><button onClick={() => this.props.selectDate(info.id)}>View Day</button></div>
        </div>
        <div className="thumb">
          <img src={info.thumbnail_image} />
        </div>
      </div>
    );
  }

}

export default connect(null, { selectDate })(MenuListItem);
