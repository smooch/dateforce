import React, { Component } from "react";
import { connect } from "react-redux";

import { setSectionShownIndex } from "../actions/mainActions";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left" />
        <div className="header-middle">
          <input
            type="button"
            value="Conversations"
            onClick={() => {
              this.props.setSectionShownIndex(0);
            }}
          />
          <input
            type="button"
            value="Funnel"
            onClick={() => {
              this.props.setSectionShownIndex(1);
            }}
          />
          <input
            type="button"
            value="Tracks"
            onClick={() => {
              this.props.setSectionShownIndex(2);
            }}
          />
        </div>
        <div className="header-right" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sectionShownIndex: state.mainReducer.sectionShownIndex
  };
};

const mapDispatchToProps = dispatch => ({
  setSectionShownIndex: index => dispatch(setSectionShownIndex(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
