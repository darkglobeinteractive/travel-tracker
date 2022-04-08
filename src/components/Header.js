import React from 'react';
import { connect } from 'react-redux';

import '../css/Header.css';
import MenuButton from './MenuButton';
import Spinner from './Spinner';

class Header extends React.Component {

  renderMenuButton() {

    if (this.props.load_complete) {
      if (this.props.active_date) {
        return <MenuButton />
      } else {
        return <></>
      }
    } else {
      return <Spinner />
    }
  }

  render() {

    // The menu button will only appear once the travel_dates state object is populated
    return (
      <div id="header">
        <div className="wrap">
          <div className="site-title">0K Travel Tracker</div>
          {this.renderMenuButton()}
        </div>
      </div>
    );

  }

}

export default Header;
