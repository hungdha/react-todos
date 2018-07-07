import { connect } from 'react-redux'
// import { toggleTodo} from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }

  /*switch (action){
      case EventActions.ACTION_COMPLETE:
        return []
      case EventActions.ACTION_EDIT:
        return []
      case EventActions.ACTION_DELETE:
        return todos.filter( t => {
            t.id != 1
        })
      default:
          throw new Error('Unknown action: ' + action)
  }*/
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  isEditing: state.isEditing
})

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
    // deleteTodo : id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
