import React from 'react';
import { connect } from 'react-redux';

import '../css/Header.css';
import MenuButton from './MenuButton';
import Spinner from './Spinner';

class Header extends React.Component {

  renderMenuButton(show_menu_button) {

    if (show_menu_button) {
      return <MenuButton />
    } else {
      return <Spinner />
    }
  }

  render() {

    const show_menu_button = this.props.show_menu_button;

    // The menu button will only appear once the travel_dates state object is populated
    return (
      <div id="header">
        <div className="wrap">
          <div className="site-title">0K Travel Tracker</div>
          {this.renderMenuButton(show_menu_button)}
        </div>
      </div>
    );

  }

}

export default Header;
