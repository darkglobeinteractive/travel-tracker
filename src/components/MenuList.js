import React from 'react';
import { connect } from 'react-redux';

import '../css/MenuList.css';
import MenuListItem from './MenuListItem';

const MenuList = ({ show_menu, travel_dates, trip_content, trip_link }) => {

  if (travel_dates.length === 0) {
    return (
      <></>
    );
  }
  return (
    <div id="menu">
      <div className="wrap">
        <div className="trip-cta" dangerouslySetInnerHTML={{__html: trip_content}} />
        <div className="list-container">
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
    trip_content: state.trip.content,
    trip_link: state.trip.link
  }
}

export default connect(mapStateToProps, {})(MenuList);
