import React, { Component } from 'react';
import ToDoForm from './to_do_form.jsx';
import ToDo from './to_do.jsx';
import Chart from './chart.jsx';
import regeneratorRuntime from "regenerator-runtime";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addToDo = (name) => {
    const toDo = {
      name: name,
      done: false,
    }

    const copiedState = this.state.todos.slice(0);
    copiedState.push(toDo);

    this.setState({
      todos: copiedState
    })

  }

  updateDone = async (index) => {
    const copiedState = this.state.todos.slice(0);
    copiedState[index].done = !copiedState[index].done
    await this.setState({
      todos: copiedState
    })
  }

  deleteTodo = (index) => {
    const copiedState = this.state.todos.slice(0);
    copiedState.splice(index, 1);
    this.setState({
      todos: copiedState
    })
  }

  renderList = () => {
    return this.state.todos.map((todo, index) =>
      <div key={index}>
        <ToDo
          index={index}
          name={todo.name}
          done={todo.done}
          setDone={this.updateDone.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
      </div>
    )
  }

  render () {
    return (
      <div>
        <h1>What's the plan for today ?</h1>
        <ToDoForm setToDo={this.addToDo}></ToDoForm>
        <div>
          {this.renderList()}
        </div>
        <Chart
          validated={this.state.todos.filter(el => el.done).length}
          notValidated={this.state.todos.filter(el => !el.done).length}
        />
      </div>
    );
  }
}

export default ToDoList;
