import React, { Component } from "react";
import { connect } from "react-redux";

class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <div className="chat-row">
          {this.props.chatMessages.map(elem => {
            return (
              <div className="chat-bubble">
                <div className="chat-text">{elem}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chatMessages: state.chatReducer.chatMessages
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
