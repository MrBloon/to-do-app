import React, { Component } from 'react';
import ToDoForm from './to_do_form.jsx';
import { RiCloseCircleLine } from 'react-icons/ri';

class ToDo extends Component {
  render () {
    return (
      <div
        className={this.props.done ? 'todo-row complete' : 'todo-row'}
        key={this.props.key}
      >
        <div
          key={this.props.id}
          className="left-handside"
        >
          <input
            type="checkbox"
            style={{marginRight: "4px"}}
            onClick={()=> this.props.setDone(this.props.index)}
          />
          {this.props.name}
        </div>
        <div className='icons'>
{          <RiCloseCircleLine
            onClick={() => this.props.deleteTodo(this.props.index)}
            className='delete-icon'
          />}
        </div>
      </div>
    )
  }
}

export default ToDo;
