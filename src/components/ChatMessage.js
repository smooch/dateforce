import React, { Component } from "react";
import { connect } from "react-redux";

class ChatMessage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="chat" />
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
)(ChatMessage);
