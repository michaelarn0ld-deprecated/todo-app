import React, { Component } from 'react';
import ToDo from './ToDo';
import todoList from './todoList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoList,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((currentState) => {
      const nextState = currentState.todos.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            text: item.text,
            completed: !item.completed,
          };
        }
        return item;
      });
      return {
        todos: nextState,
      };
    });
  }

  render() {
    const todoJSX = this.state.todos.map((item) => (
      <ToDo key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoJSX}</div>;
  }
}

export default App;
