import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer as Hot } from 'react-hot-loader'

import { Root } from '../src'

const render = () => {
  ReactDOM.render(<Hot><Root /></Hot>, document.querySelector('react'))
}

render()

module.hot.accept('../src', render)
