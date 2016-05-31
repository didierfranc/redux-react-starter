import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute } from 'react-router'

import { history, store } from './store'
import { Provider } from 'react-redux'

import App from './components/App'

const Index = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

export default Index
