import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import App from './'

const rootEl = document.getElementById('root')

render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
)

const NextApp = require('./').default

if (module.hot) {
  module.hot.accept('./', () => {
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    )
  })
}
