import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Message, Blue } from './Styled'

const Home = ({ user }) =>
  user.token ? (
    <Message>
      {"You're logged in as "}
      <Blue>{user.email}</Blue>
      <a href="/login">
        <button onClick={localStorage.clear()}>logout</button>
      </a>
    </Message>
  ) : (
    <Redirect to="/login" />
  )

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(Home)
