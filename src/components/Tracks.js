import React, { Component } from "react";
import { connect } from "react-redux";

class Tracks extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="tracks-section" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracks);
