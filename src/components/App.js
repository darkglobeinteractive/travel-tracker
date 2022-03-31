import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDate, fetchTrip } from '../actions/index';

import './App.css';
import Header from './Header';
import Footer from './Footer';
import Spinner from './Spinner';
import TravelDate from './TravelDate';
import TravelDateList from './TravelDateList';


class App extends Component {

  // Call fetchTrip action creator upon render
  componentDidMount() {
    this.props.fetchTrip();
  }

  // When app_ready is true it means the active_date travel date has been loaded and we can populate the body content area with the latest date
  renderTravelDate = () => {
    if (this.props.load_complete) {
      return <TravelDate id={this.props.active_date} />;
    } else {
      return <Spinner />;
    }
  }

  render() {
    return (
      <div id="page">
        <Header show_menu={this.props.load_complete} />
        <TravelDateList />
        {this.renderTravelDate()}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    active_date: state.global.active_date,
    app_ready: state.global.app_ready,
    load_complete: state.global.load_complete
  }
}
export default connect(mapStateToProps, { fetchTrip, selectDate })(App);
