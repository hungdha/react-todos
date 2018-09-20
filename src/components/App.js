import React from 'react'
import Filter from './Filter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import SearchTodo from '../containers/SearchTodo';

class App extends React.Component {
  render() {
    
    return (
      <div>
        <h3>Todo List</h3>
        <AddTodo />
        <hr />
        <SearchTodo />
        <Filter />
        <VisibleTodoList />
        
      </div>
    );
  }
}


export default App
