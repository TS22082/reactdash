import React, { Component } from "react";
import firebase from "../../../firebase";
import "./Messages.css";

const db = firebase.database();
class Messages extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      messages: [],
      messageText: "",
      senderText: "",
      contactText: ""
    };
  }

  componentDidMount() {
    let messageArray = [];
    db.ref("messages").on("value", snapshot => {
      snapshot.forEach(childSnapshot => {
        messageArray.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      this.setState({ messages: messageArray });
      console.log(this.state.messages);
    });
  }
  render() {
    return (
      <div className="messageContainer">
        <h1 className="test">hello</h1>
        <h1 className="test">Hello</h1>
      </div>
    );
  }
}

export default Messages;
