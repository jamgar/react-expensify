import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import LoginPage from '../components/LoginPage'
import LoginPageForm from '../components/LoginPageForm'
import PasswordForgetPage from '../components/PasswordForgetPage'
import SignupPage from '../components/SignupPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PublicRoute path="/signup" component={SignupPage}/>
        <PublicRoute path="/login" component={LoginPageForm}/>
        <PublicRoute path="/password-forget" component={PasswordForgetPage}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
        <PrivateRoute path="/create" component={AddExpensePage}/>
        <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter
