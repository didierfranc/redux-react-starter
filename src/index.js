import Offline from 'offline-plugin/runtime'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'

import { store } from './store'

import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Header from './components/Header'
import { Body } from './components/Styled'

if (process.env.NODE_ENV === 'production') Offline.install()

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Body>
        <Header />
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/signup" component={Signup} />
        <Match exactly pattern="/login" component={Login} />
      </Body>
    </BrowserRouter>
  </Provider>
)

if (!module.hot) render(<Root />, document.querySelector('react'))
