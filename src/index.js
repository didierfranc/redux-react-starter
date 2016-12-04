import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import { Router, Route } from 'react-router'
import { history, store } from './store'

import App from './components/App'
import Somewhere from './components/Somewhere'

export const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/somewhere" component={Somewhere} />
    </Router>
  </Provider>
)

render(<Root />, document.querySelector('react'))
