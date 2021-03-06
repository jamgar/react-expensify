import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SignUpLink } from './SignUpLink'
import { startSignInWithEmailAndPassword } from '../actions/auth'

class LoginPageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }
  isInvalid = () => (
    this.state.email === '' || this.state.password === ''
  )
  onEmailChange = (e) => {
    const email = e.target.value
    this.setState({ email })
  }
  onPasswordChange = (e) => {
    const password = e.target.value
    this.setState({ password })
  }
  onSubmit = (e) => {
    const { email, password } = this.state
    e.preventDefault()
    if (this.isInvalid()) {
      this.setState({ error: 'Invalid email or password.'})
    } else {
      this.setState({ error: '' })
      this.props.startSignInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Logged in successfully.');
        })
        .catch(error => {
          let message

          switch (error.code) {
            case 'auth/user-not-found':
              message = 'User with this email not found.'
              break;
            case 'auth/invalid-email':
              message = 'The email is invalid.'
              break;
            case 'auth/wrong-password':
              message = 'The password is invalid.'
              break;
            default:
              message = 'Something went wrong.'
              console.log('Auth Error:', error)
          }
          this.setState({ error: `${message} Please try again.` })
        })
    }
  }
  render() {
    const {
      email,
      password,
      error
    } = this.state
    return (
      <div>
        <div className="page-header page-header--centered">
          <div className="content-container">
            <h1 className="page-header__title">Login</h1>
          </div>
        </div>
        <div className="content-container content-container--sm">
          <form className="form" onSubmit={this.onSubmit}>
            {error && <p className="form__error">{error}</p>}
            <input
              type="email"
              className="text-input"
              placeholder="Email Address"
              autoFocus
              value={email}
              onChange={this.onEmailChange}
            />
            <input
              type="password"
              className="text-input"
              placeholder="Password"
              value={password}
              onChange={this.onPasswordChange}
            />
            <button type="submit" className="button">
              Log In
            </button>
            <Link className="link" to='/'>
            Cancel
            </Link>
            <Link className="link" to='/password-forget'>
              Forgot Password
            </Link>
          </form>
          <SignUpLink />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSignInWithEmailAndPassword: (email, password) => dispatch(startSignInWithEmailAndPassword(email, password))
})

export default connect(undefined, mapDispatchToProps)(LoginPageForm)
