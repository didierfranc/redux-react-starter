import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { login } from '../actions'
import { TextField, FormTitle, Submit, FooterLink } from './Styled'

const Login = ({ user, login }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email: { value: email }, password: { value: password } } = e.target
    login({ email, password })
  }

  return (
    <div>
      <FormTitle>Login</FormTitle>
      <form onSubmit={handleSubmit}>
        <TextField type="email" name="email" placeholder="Email address" />
        <TextField type="password" name="password" placeholder="Password" />
        <Submit type="submit" value="Continue" />
      </form>
      <FooterLink to="/signup">{'You don\'t have an account ?'}</FooterLink>
      {user.token && <Redirect to="/" />}
    </div>
  )
}

Login.propTypes = {
  user: React.PropTypes.shape({}),
  login: React.PropTypes.func,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { login })(Login)
