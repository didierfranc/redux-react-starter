import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute } from 'react-router'

import { history, store } from './store'
import { Provider } from 'react-redux'

import App from './components/App'
import Somewhere from './components/Somewhere'

const Index = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="somewhere" component={Somewhere} />
    </Router>
  </Provider>
)

export default Index
