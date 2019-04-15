import React, { Component } from "react";
import { connect } from "react-redux";

class ChatRow extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="chat-row" />
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
)(ChatRow);
