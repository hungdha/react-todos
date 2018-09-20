import React from 'react'
import PropTypes from 'prop-types'

class ImageButton extends React.Component{
    
    render(){
        return (
            <button onClick={this.props.onClick} style={styles.btn} >
                <img src={this.props.source} alt="this is i" style={styles.image} />
                <span>{this.props.text}</span>
            </button>
        )
    }
}
const styles = {
    image:{
        width:'40px',
        height:'40px'
    },
    btn:{
        backgroundColor: 'DodgerBlue',
        border: 'none',
        color: 'white',
        padding: '12px 16px',
        fontSize: '16px',
        cursor: 'pointer'
    }
}
ImageButton.propTypes = {
    'source' : PropTypes.string.isRequired,
    'text' : PropTypes.string.isRequired,
    'onClick' : PropTypes.func.isRequired
}

export default ImageButton;