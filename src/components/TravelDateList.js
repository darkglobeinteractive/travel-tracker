import React from 'react';
import { connect } from 'react-redux';
import TravelDateListItem from './TravelDateListItem';

const TravelDateList = ({ travel_dates }) => {

  if (travel_dates.length === 0) {
    return (
      <div>Loading Dates...</div>
    );
  }
  return (
    <div id="travel-date-list">
      <div className="wrap">
        <div className="list-container">
          {travel_dates.map((travel_date, index) => {
            return (
              <TravelDateListItem key={index} travel_date={travel_date} />
            );
          })}
        </div>
      </div>
    </div>
  );

}

const mapStateToProps = state => {
  return {
    travel_dates: state.travel_dates
  }
}

export default connect(mapStateToProps, {})(TravelDateList);
