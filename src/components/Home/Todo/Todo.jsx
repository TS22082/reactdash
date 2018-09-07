import React, { Component } from "react";
import firebase from "../../../firebase";

const db = firebase.database();

class Todo extends Component {
  constructor() {
    super();
    this.state = { todos: [], todoText: "" };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    let todoArray = [];
    db.ref("todos").on("value", snapshot => {
      todoArray = [];
      snapshot.forEach(childSnapshot => {
        todoArray.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      this.setState({ todos: todoArray });
      console.log(this.state);
    });
  }

  handleChange = e => {
    const todoText = e.target.value;
    this.setState({ todoText });
  };

  addTodo = e => {
    e.preventDefault();
    db.ref("todos").push({ todo: this.state.todoText });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Todo;
