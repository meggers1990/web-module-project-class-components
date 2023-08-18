import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { todo, toggleTodo } = this.props;

    return (
      <li onClick={() => toggleTodo(todo.id)} className={todo.completed ? 'completed' : ''}>
        {todo.name}
      </li>
    );
  }
}

export default Todo;
