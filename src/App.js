import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import Conversations from "./components/Conversations";
import Funnel from "./components/Funnel";
import Tracks from "./components/Tracks";

// import "https://use.typekit.net/tha6agz.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.sectionShownIndex === 0 && <Conversations />}
        {this.props.sectionShownIndex === 1 && <Funnel />}
        {this.props.sectionShownIndex === 2 && <Tracks />}
      </div>
    );
  }
}

let mapStateToProps = function(state) {
  return {
    sectionShownIndex: state.mainReducer.sectionShownIndex
  };
};

export default connect(mapStateToProps)(App);
