import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'
import Async from 'react-code-splitting'

import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Header from './Header'
import { Body } from './Styled'

const Home = () => <Async load={import('./Home')} />

const App = ({ user }) => (
  <Body>
    <Header />
    {user.token
      ? <Route path="/" component={Home} />
      : <Redirect to="/login" />}
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </Body>
)

App.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default withRouter(connect(state => ({ user: state.user }))(App))
