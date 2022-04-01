import React from 'react';
import { connect } from 'react-redux';

import '../css/MenuList.css';
import MenuListItem from './MenuListItem';

const MenuList = ({ show_menu, travel_dates, trip_link }) => {

  if (travel_dates.length === 0) {
    return (
      <div>Loading Dates...</div>
    );
  }
  return (
    <div id="menu" className={show_menu ? `show` : ``}>
      <div className="wrap">
        <div className="list-container">
          <div className="trip-cta"><a href={trip_link} target="_blank">[[Add Callout to Visit Full Site]]</a></div>
          {travel_dates.reverse().map((travel_date, index) => {
            return (
              <MenuListItem key={index} travel_date={travel_date} />
            );
          })}
        </div>
      </div>
    </div>
  );

}

const mapStateToProps = state => {
  return {
    show_menu: state.global.show_menu,
    travel_dates: Object.values(state.travel_dates),
    trip_link: state.trip.link
  }
}

export default connect(mapStateToProps, {})(MenuList);
