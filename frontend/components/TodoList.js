import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { todos, toggleTodo } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
