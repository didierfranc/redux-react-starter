import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer as Hot } from 'react-hot-loader'

import { Root } from '../src'

module.hot.accept('../src', () => {
  ReactDOM.render(<Hot><Root /></Hot>, document.querySelector('react'))
})
