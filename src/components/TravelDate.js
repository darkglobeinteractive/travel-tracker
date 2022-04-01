import React from 'react';
import { connect } from 'react-redux';

class TravelDate extends React.Component {
  render() {
    return (
      <div id="travel-date">
        <div className="wrap">
          [TravelDate -- {this.props.id}]
          <h1>{this.props.travel_date.title}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    travel_date: state.travel_dates[ownProps.id]
  }
}

export default connect(mapStateToProps, {})(TravelDate);
