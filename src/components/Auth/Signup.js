import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signup } from '../../actions'

import { FormTitle, FooterLink } from '../Styled'
import Form from './Form'

const Signup = ({ user, signup }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const { email: { value: email }, password: { value: password } } = e.target
    signup({ email, password })
  }

  return (
    <div>
      <FormTitle>Sign up</FormTitle>
      <Form onSubmit={handleSubmit} />
      <FooterLink to="/login">Already have an account ?</FooterLink>
      {user.token && <Redirect to="/" />}
    </div>
  )
}

Signup.propTypes = {
  user: PropTypes.shape({}).isRequired,
  signup: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { signup })(Signup)
