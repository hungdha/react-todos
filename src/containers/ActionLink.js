import React from 'react'
import {connect} from 'react-redux'

import {editTodo, deleteTodo, toggleTodo } from "../actions";
const ActionLink = ({ dispatch, id , completed }) => {
    

    return (
        <div>
            <button onClick={ e => { dispatch(deleteTodo(id)) }}>Delete</button>
            <button onClick={ e => { dispatch(editTodo(id)) }}>Edit</button>
        
            {!completed ? (
                <button onClick={ e => { dispatch(toggleTodo(id)) }} >Complete</button>
                ) : (
                    <button onClick={ e => { dispatch(toggleTodo(id)) }} >Unfinished</button>
                )
            }
        </div>
    )
}

export default connect()(ActionLink)