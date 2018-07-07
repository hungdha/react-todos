import React from 'react'
import PropTypes from 'prop-types'
import ActionLink from '../containers/ActionLink'
import EditTodo from "../containers/EditTodo";
const style = {
    padding : '10px 0',
    borderBottom : '1px solid #900'

}
const Todo = ({  id, completed, text }) => (
  <li style={style}>
      <span style={{
          textDecoration: completed ? 'line-through' : 'none',
          color : completed ? 'red' : ''
      }}>{text}</span>
      <div>
          <EditTodo id={id} text={text} />
          <ActionLink id={id} />
      </div>
  </li>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
