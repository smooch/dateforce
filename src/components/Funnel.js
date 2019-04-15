import React, { Component } from "react";
import { connect } from "react-redux";

class Funnel extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="funnel-section" />
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
)(Funnel);
