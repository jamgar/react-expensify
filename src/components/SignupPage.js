import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startCreateUserWithEmailAndPassword } from '../actions/auth'

export class SignupPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      error: ''
    }
  }
  isInvalid = () => (
    this.state.password !== this.state.passwordConfirmation ||
    this.state.password === '' ||
    this.state.email === ''
  )
  onEmailChange = (e) => {
    const email = e.target.value
    this.setState({ email })
  }
  onPasswordChange = (e) => {
    const password = e.target.value
    this.setState({ password })
  }
  onPasswordConfirmationChange = (e) => {
    const passwordConfirmation = e.target.value
    this.setState({ passwordConfirmation })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    if (this.isInvalid()) {
      this.setState({ error: 'Invalid email or passwords do not match.'})
    } else {
      this.setState({ error: '' })
      this.props.startCreateUserWithEmailAndPassword(email, password)
    }
  }
  render() {
    const {
      email,
      password,
      passwordConfirmation,
      error
    } = this.state
    return (
      <div>
      <div className="page-header page-header--centered">
        <div className="content-container">
          <h1 className="page-header__title">Sign Up</h1>
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
          <input
            type="password"
            className="text-input"
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            onChange={this.onPasswordConfirmationChange}
          />
          <button type="submit" className="button">
            Sign Up
          </button>
          <p>
            <Link className="link" to='/'>
              Cancel
            </Link>
          </p>
        </form>
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startCreateUserWithEmailAndPassword: (email, password) => dispatch(startCreateUserWithEmailAndPassword(email, password))
})

export default connect(undefined, mapDispatchToProps)(SignupPage)

export const SignUpLink = () => (
  <p>
    <Link className="link" to='/signup'>
      Sign Up
    </Link>
  </p>
)
