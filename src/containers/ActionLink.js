import React from 'react'
import {connect} from 'react-redux'

import {editTodo, deleteTodo, toggleTodo } from "../actions";
const ActionLink = ({ dispatch, id }) => {
    return (
        <div>
            <button onClick={ e => { dispatch(deleteTodo(id)) }}>Delete</button>
            <button onClick={ e => { dispatch(editTodo(id)) }}>Edit</button>
            <button onClick={ e => { dispatch(toggleTodo(id)) }} >Complete</button>
        </div>
    )
}

export default connect()(ActionLink)