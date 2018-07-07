import React from 'react'
import {connect} from 'react-redux'
import {editTodo, updateTodo} from '../actions'

class EditTodo extends React.Component {

    constructor(props) {
        super(props)
    }

    onSave(e) {
        e.preventDefault()
        let {dispatch, id} = this.props
        dispatch(updateTodo({
            id: id,
            text: this.refs.text.value
        }))
        dispatch(editTodo(0))
    }

    onCancel(e) {
        let {dispatch} = this.props
        dispatch(editTodo(0))
    }

    render() {
        if (this.props.editing === this.props.id ) {
            return (

                <div>
                    <form onSubmit={this.onSave.bind(this)}>
                        <input ref="text" defaultValue={this.props.text}/>
                        <button type="submit">
                            Save Todo
                        </button>
                        <button type="button" onClick={this.onCancel.bind(this)}>Cancel
                        </button>
                    </form>
                </div>

            )
        }
        return (<div></div>)
    }
}


const mapStateToProps = (state, ownProps) => ({
    editing: state.editing
})


export default connect(
    mapStateToProps
)(EditTodo)
