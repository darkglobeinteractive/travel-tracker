import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions';

import '../css/Header.css';

const Header = ({ show_menu, toggleMenu }) => {

  // The menu button will only appear once the travel_dates state object is populated
  return (
    <div id="header">
      <div className="wrap">
        <div className="site-title">0K Travel Tracker</div>
        {show_menu &&
          <div className="menu-button"><button onClick={() => toggleMenu()}>Menu</button></div>
        }
      </div>
    </div>
  );
}

export default connect(null, { toggleMenu })(Header);
