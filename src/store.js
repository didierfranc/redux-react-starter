import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import thunk from 'redux-thunk'
import rootReducer from './reducers'

const defaultState = {
  data: {},
}

export const store = createStore(rootReducer, defaultState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export const history = syncHistoryWithStore(browserHistory, store)
