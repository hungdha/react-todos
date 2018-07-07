import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
const style = {
  'listStyle' : 'none'
}
const TodoList = ({ todos }) => (
  <ul style={style}>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
      >
      </Todo>
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired

}

export default TodoList
