import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDate, fetchTrip } from '../actions/index';

import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import MenuList from './MenuList';
import Spinner from './Spinner';
import TravelDate from './TravelDate';
import TripDetails from './TripDetails';

class App extends Component {

  // Call fetchTrip action creator upon render
  componentDidMount() {
    this.props.fetchTrip();
  }

  // Determine whether to show the active travel date, the trip data or the spinner
  renderTravelDate = () => {

    // If load_complete, try to load the active date
    if (this.props.load_complete) {

      // If an active date exists, load the TravelDate component
      if (this.props.active_date) {
        return <TravelDate id={this.props.active_date} />

      // Else load the TripContent component
      } else {
        return <TripDetails trip={this.props.trip} />
      }

    // Load the Spinner if we're still loading
    } else {
      return <Spinner message="Loading Date" />
    }

  }

  render() {
    return (
      <div id="page" className={`${this.props.menu_open ? `menu-open` : ``}`}>
        <Header load_complete={this.props.load_complete} active_date={this.props.active_date} />
        <MenuList />
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
    load_complete: state.global.load_complete,
    menu_open: state.global.show_menu,
    trip: state.trip
  }
}
export default connect(mapStateToProps, { fetchTrip, selectDate })(App);
