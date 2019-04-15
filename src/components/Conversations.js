import React, { Component } from "react";
import { connect } from "react-redux";

import ActiveConversations from "./ActiveConversations";
import Chat from "./Chat";
import MatchProfile from "./MatchProfile";

class Conversations extends Component {
  render() {
    return (
      <div className="conversations-section">
        <ActiveConversations />
        <Chat />
        <MatchProfile />
      </div>
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
)(Conversations);
