import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { signup } from '../actions'
import { TextField, FormTitle, Submit, FooterLink } from './Styled'

const Signup = ({ user, signup }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email: { value: email }, password: { value: password } } = e.target
    signup({ email, password })
  }

  return (
    <div>
      <FormTitle>Sign up</FormTitle>
      <form onSubmit={handleSubmit}>
        <TextField type="email" name="email" placeholder="Email address" />
        <TextField type="password" name="password" placeholder="Password" />
        <Submit type="submit" value="Continue" />
      </form>
      <FooterLink to="/login">Already have an account ?</FooterLink>
      {user.token && <Redirect to="/" />}
    </div>
  )
}

Signup.propTypes = {
  user: React.PropTypes.shape({}),
  signup: React.PropTypes.func,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { signup })(Signup)
