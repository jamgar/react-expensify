import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLoginWithGoogle } from '../actions/auth'
import { SignUpLink } from './SignUpLink'

export const LoginPage = ({ startLoginWithGoogle }) => (
    <div className="box-layout">
      <div className='box-layout__box'>
        <h1 className="box-layout__title">Expensify</h1>
        <p>Time to take charge of you expenses.</p>
        <p>
          <Link to="/login" className="button">Login with Email</Link>
        </p>
        <button className="button" onClick={startLoginWithGoogle}>Login with Google</button>
        <SignUpLink />
      </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
