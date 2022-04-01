import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions';
import '../css/Header.css';

const Header = ({ show_menu, toggleMenu }) => {

  // The menu button will only appear once the travel_dates state object is populated
  return (
    <div id="header">
      <div className="wrap">
        <h1>0K Travel Tracker</h1>
        {show_menu &&
          <button onClick={() => toggleMenu()}>Menu</button>
        }
      </div>
    </div>
  );
}

export default connect(null, { toggleMenu })(Header);
