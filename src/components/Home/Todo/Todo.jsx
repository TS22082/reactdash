import React, { Component } from "react";
import firebase from "../../../firebase";
import "./Todo.css";

const db = firebase.database();

class Todo extends Component {
  constructor() {
    super();
    this.state = { todos: [], todoText: "" };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.updateState = this.updateState.bind(this);
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
    });
  }

  handleChange = e => {
    const todoText = e.target.value;
    this.setState({ todoText });
  };

  addTodo = e => {
    e.preventDefault();
    db.ref("todos").push({ todo: this.state.todoText });
    this.setState({ todoText: "" });
  };

  removeTodo = todoID => {
    const itemRef = db.ref(`/todos/${todoID}`);
    itemRef.remove();
  };

  updateTodo = (todoID, todoText) => {
    const itemRef = db.ref(`/todos/${todoID}`);
    itemRef.update({ todo: todoText });
    this.setState({ todoText: "" });
  };

  updateState = todoID => {
    db.ref(`/todos/${todoID}`)
      .once("value")
      .then(snapshot => {
        this.setState({ todoText: snapshot.val().todo });
      });
  };

  render() {
    return (
      <div className="todoContainer">
        <form onSubmit={this.addTodo}>
          <input onChange={this.handleChange} value={this.state.todoText} />
        </form>
        {this.state.todos.map(todo => (
          <div key={todo.id} className="todoList">
            <p onClick={() => this.updateState(todo.id)}>{todo.todo}</p>
            <button
              onClick={() => {
                this.updateTodo(todo.id, this.state.todoText);
              }}
              className="updateBtn"
            >
              Update
            </button>
            <button
              onClick={() => this.removeTodo(todo.id)}
              className="deleteBtn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Todo;
