import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import editing from './editing'

export default combineReducers({
    todos,
    visibilityFilter,
    editing
})
