import { createStore, compose, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import rootReducer from './reducers'

export const store = createStore(rootReducer, undefined,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)
