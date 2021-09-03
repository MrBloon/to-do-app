import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setToDo(this.state.value);
    this.setState({ value: '' });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Add an action"
          value={this.state.value}
          name="text"
          className="todo-input"
          onChange={this.handleChange}
          ref={(input) => { this.messageBox = input; }}
        />
        <button className="todo-button">Add</button>
      </form>

    );
  }
}

export default ToDoForm;
