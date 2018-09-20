import React, { Component } from 'react';

class SearchForm extends Component {
    render() {
        return (
            <form>
                <input type="text" onKeyUp={this.props.handleSearch}/>
                <button>Search</button>
            </form>
        );
    }
}

export default SearchForm;