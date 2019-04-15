import React, { Component } from "react";
import { connect } from "react-redux";

class ActiveConversations extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="active-conversations" />
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
)(ActiveConversations);
