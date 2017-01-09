import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { loginWithToken } from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, undefined,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
)

store.dispatch(loginWithToken())
