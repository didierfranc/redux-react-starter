import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'

import { store } from './store'

import Home from './components/Home'
import Somewhere from './components/Somewhere'

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/somewhere" component={Somewhere} />
      </div>
    </BrowserRouter>
  </Provider>
)

render(<Root />, document.querySelector('react'))
