import React from 'react';
import { connect } from 'react-redux';
import { fetchActiveDate } from '../actions';
import TravelDateContent from './TravelDateContent';
import ZerodegreesK from '../apis/zerodegreesk';
import '../css/TravelDate.css';

class TravelDate extends React.Component {

  componentDidMount() {
    this.props.fetchActiveDate(this.props.id);
  }

  render() {

    // Set variables to make the JSX a bit cleaner
    const td = this.props.travel_date;
    const title = td.title;
    const dates = td.start_end_dates;
    const tldr = td.tldr;
    const date_next = td.next_date;
    const date_prev = td.prev_date;

    return (
      <div id="travel-date">
        <div className="wrap">
          <div className="standard-info">
            <h1>{title}</h1>
            <div className="dates">{dates}</div>
            <div className="tldr">{tldr}</div>
            <TravelDateContent content={this.props.active_date.content} />
          </div>
          <div>[[IMAGE GALLERY]]</div>
          <div>[[VIDEOS]]</div>
          <div>[[PLACES]]</div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    active_date: state.active_date,
    travel_date: state.travel_dates[ownProps.id]
  }
}

export default connect(mapStateToProps, { fetchActiveDate })(TravelDate);
