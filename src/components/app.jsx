import React, { Component } from 'react';
import ToDoList from './to_do_list.jsx';

class App extends Component {
  render () {
    return (
      <div className="todo-app">
        <ToDoList></ToDoList>
      </div>
    )
  }
}

export default App;
