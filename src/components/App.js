import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDate, fetchTrip } from '../actions/index';

import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import MenuList from './MenuList';
import Spinner from './Spinner';
import TravelDate from './TravelDate';

class App extends Component {

  // Call fetchTrip action creator upon render
  componentDidMount() {
    this.props.fetchTrip();
  }

  // When app_ready is true it means the active_date travel date has been loaded and we can populate the body content area with the latest date
  renderTravelDate = () => {
    if (this.props.load_complete) {
      return <TravelDate id={this.props.active_date} />
    } else {
      return <Spinner message="Loading Date" />
    }
  }

  render() {
    return (
      <div id="page" className={`${this.props.menu_open ? `menu-open` : ``}`}>
        <Header show_menu_button={this.props.load_complete} />
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
    menu_open: state.global.show_menu
  }
}
export default connect(mapStateToProps, { fetchTrip, selectDate })(App);
