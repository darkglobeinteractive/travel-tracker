import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions';

const MenuButton = ({ toggleMenu }) => {

  return (
    <div className="menu-button">
      <button onClick={() => toggleMenu()}>
        <div className="menu-button-title">Menu</div>
					<span className="menu-button-wrapper">
            <span className="menu-button-container">
  						<span></span>
  						<span></span>
  						<span></span>
  						<span></span>
            </span>
					</span>
      </button>
    </div>
  );
}

export default connect(null, { toggleMenu })(MenuButton);
