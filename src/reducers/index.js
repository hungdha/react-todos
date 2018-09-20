import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import editing from './editing'

export const keyword = (state = '', action ) => {
    if(action.type == 'SET_VISIBILITY_FILTER_BY_KEYWORD' )
        return action.keyword;
    else
        return state;
}

export default combineReducers({
    todos,
    visibilityFilter,
    editing,
    keyword
})
