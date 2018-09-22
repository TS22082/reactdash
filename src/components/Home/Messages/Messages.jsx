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
      contactText: "",
      viewMessage: false,
      messageId: ""
    };

    this.deleteMessage = this.deleteMessage.bind(this);
    this.showMessage = this.showMessage.bind(this);
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
    });
  }

  showMessage = messageID => {
    db.ref(`/messages/${messageID}`)
      .once("value")
      .then(snapshot => {
        this.setState({ senderText: snapshot.val().name });
        this.setState({ contactText: snapshot.val().contact });
        this.setState({ messageText: snapshot.val().message });
        this.setState({ viewMessage: true });
        this.setState({ messageId: messageID });

        // use messageID to delete item freom firebase
        // setstate  viewMessage to false
        console.log(this.state.messageId);
      });
  };

  deleteMessage = () => {
    this.setState({ viewMessage: false });
    const itemRef = db.ref(`/messages/${this.state.messageId}`);
    itemRef.remove();
  };
  render() {
    if (this.state.viewMessage === true) {
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
            <div className="messageContact">
              <p>{this.state.senderText}</p>
              <p>{this.state.contactText}</p>
            </div>
            <div className="messageText">
              <p>{this.state.messageText}</p>
              <button className="deleteDtn" onClick={this.deleteMessage}>
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    } else {
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
        </div>
      );
    }
  }
}

export default Messages;
