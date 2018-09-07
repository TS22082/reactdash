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
  };

  removeTodo = todoID => {
    const itemRef = db.ref(`/todos/${todoID}`);
    itemRef.remove();
  };

  updateTodo = (todoID, todoText) => {
    const itemRef = db.ref(`/todos/${todoID}`);
    itemRef.update({ todo: todoText });
  };

  render() {
    return (
      <div className="todoContainer">
        <form onSubmit={this.addTodo}>
          <input onChange={this.handleChange} placeholder="Add todo" />
        </form>
        {this.state.todos.map(todo => (
          <div key={todo.id} className="todoList">
            <p>{todo.todo}</p>
            <button
              onClick={() => {
                this.updateTodo(todo.id, this.state.todoText);
              }}
            >
              Update
            </button>
            <button onClick={() => this.removeTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Todo;
