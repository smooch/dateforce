import React, { Component } from "react";
import { connect } from "react-redux";

class MatchProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="match-profile" />
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
)(MatchProfile);
