import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import App from './components/App'
import rootReducer from './reducers'
import {getAllTodos} from './actions'

import thunk from 'redux-thunk'

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(...middleware)
    )
)

store.dispatch(getAllTodos());
store.subscribe(function(){
    console.log('asdadasd');
})
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
