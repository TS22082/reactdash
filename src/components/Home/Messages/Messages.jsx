import React, { Component } from "react";
import firebase from "../../../firebase";
import "./Messages.css";

const db = firebase.database();
class Messages extends Component {
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
    db.ref("messages").on("value", snapshot => {
      const messageArray = [];
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

  showMessage = messageID => {
    db.ref(`/messages/${messageID}`)
      .once("value")
      .then(snapshot => {
        this.setState({ senderText: snapshot.val().name });
        this.setState({ contactText: snapshot.val().contact });
        this.setState({ messageText: snapshot.val().message });
      });
  };
  render() {
    return (
      <div className="messageContainer">
        <div>
          {this.state.messages.map(message => (
            <p
              className="messageAuthor"
              key={message.id}
              onClick={() => this.showMessage(message.id)}
            >
              {message.name}
            </p>
          ))}
        </div>
        <div className="fullMessage">
          <p>{this.state.senderText}</p>
          <p>{this.state.contactText}</p>
          <p>{this.state.messageText}</p>
        </div>
      </div>
    );
  }
}

export default Messages;
