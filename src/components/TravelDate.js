import React from 'react';

class TravelDate extends React.Component {
  render() {
    return (
      <div id="travel-date">
        <div className="wrap">
          [TravelDate -- {this.props.id}]
        </div>
      </div>
    );
  }
}

export default TravelDate;
