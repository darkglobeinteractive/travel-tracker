import React from 'react';

import '../css/Spinner.css';

const Spinner = ({ message }) => {
  return (
    <div className="spinner-container">
      <div className="wrap">
        <div className="spinner"></div>
        <div className="caption">{message}</div>
      </div>
    </div>
  );
}

export default Spinner;
