import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'

import { store } from './store'

import Home from './components/Home'
import Somewhere from './components/Somewhere'

import Header from './components/Header'
import { Body } from './components/Styled'

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Body>
        <Header />
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/somewhere" component={Somewhere} />
      </Body>
    </BrowserRouter>
  </Provider>
)

render(<Root />, document.querySelector('react'))
