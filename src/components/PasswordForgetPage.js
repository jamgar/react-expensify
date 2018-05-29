import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { history } from '../routers/AppRouter'
import { startPasswordReset } from '../actions/auth'

export class PasswordForgetPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      error: ''
    }
  }
  isInvalid = () => {
    this.state.email === ''
  }
  onEmailChange = (e) => {
    const email = e.target.value
    this.setState({ email })
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (this.isInvalid()) {
      this.setState({ error: 'Please enter an email'})
    } else {
      this.setState({ error: '' })
      this.props.startPasswordReset(this.state.email)
        .then(() => {
          console.log('Email sent...')
          this.setState({ error: 'Please check your email for a password reset link.'})
          setTimeout(() => {
            history.push('/')
          }, 5000)
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
            default:
              message = 'Something went wrong.'
              console.log('Auth Error:', error)
          }
          this.setState({ error: `${message} Please try again.`})
        })
    }
  }
  render() {
    const {
      email,
      error
    } = this.state

    return (
      <div>
        <div className="page-header page-header--centered">
          <div className="content-container">
            <h1 className="page-header__title">Password Forget</h1>
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
            <button className="button" type="submit">
              Send Reset Email
            </button>
            <Link className="link" to='/'>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startPasswordReset: (email) => dispatch(startPasswordReset(email))
})

export default connect(undefined, mapDispatchToProps)(PasswordForgetPage)
