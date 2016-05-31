import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import loaded from './load'

const rootReducer = combineReducers({
  loaded,
  routing: routerReducer
})

export default rootReducer
