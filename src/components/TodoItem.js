import React from 'react'
import PropTypes from 'prop-types'
import ActionLink from '../containers/ActionLink'
import EditTodo from "../containers/EditTodo";
// import ImageButton from './ImageButton';
// import ImageIcon from '../assets/images/viloet_file.png';

const style = {
    padding : '10px 0',
    borderBottom : '1px solid #f1f1f1'

}
class TodoItem extends React.Component{ 
    
    handleClickImageButton(event){
// console.log(event);
    }
    render(){
        
        return (
            <li style={style}>
                <span style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    color : this.props.completed ? 'red' : ''
                }}>{this.props.text}</span>
                <div>
                    <EditTodo id={this.props.id} text={this.props.text} />
                    <ActionLink id={this.props.id} completed={this.props.completed} />
                    
                </div>
            </li>
            )
    }
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem
