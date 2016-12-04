import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import { BrowserRouter, Match } from 'react-router'
import { store } from './store'

import App from './components/App'
import Somewhere from './components/Somewhere'

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/somewhere" component={Somewhere} />
      </div>
    </BrowserRouter>
  </Provider>
)

render(<Root />, document.querySelector('react'))
