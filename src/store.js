import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'

import rootReducer from './reducers'
import { loginWithToken } from './actions'
import { saveState, loadState } from './helpers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  loadState(),
  composeEnhancers(applyMiddleware(thunk)),
)

store.subscribe(throttle(() => saveState(store.getState()), 1000))
store.dispatch(loginWithToken())
