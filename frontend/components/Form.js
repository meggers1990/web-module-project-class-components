import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newTodo) {
      this.props.addTodo(this.state.newTodo);
      this.setState({ newTodo: '' });
    }
  };

  render() {
    const { newTodo } = this.state;
    const { clearCompleted } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newTodo} onChange={this.handleChange} />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default Form;
