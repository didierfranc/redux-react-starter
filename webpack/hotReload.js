import { AppContainer as Hot } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from '../src'

const rootEl = document.querySelector('react')

ReactDOM.render(<Hot><Root /></Hot>, rootEl)

if (module.hot) {
  module.hot.accept('../src', () => {
    // eslint-disable-next-line global-require, import/newline-after-import
    const Next = require('../src').Root
    ReactDOM.render(<Hot><Next /></Hot>, rootEl)
  })
}
