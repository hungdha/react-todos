import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

class TodoList extends Component {
  
  
  render() {
    
    return (
      <ol >
        {this.props.todos.map(todo =>
          <TodoItem
            key={todo.id}
            {...todo}
          >
          </TodoItem>
        )}
      </ol>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired

}

export default TodoList
