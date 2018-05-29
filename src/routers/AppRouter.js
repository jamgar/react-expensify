import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import DashboardPage from '../components/DashboardPage'
// Login and Signup
import LoginPage from '../components/LoginPage'
import LoginPageForm from '../components/LoginPageForm'
import PasswordForgetPage from '../components/PasswordForgetPage'
import SignupPage from '../components/SignupPage'
// Expense
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
// Income
import IncomeDashboardPage from '../components/Income/IncomeDashboardPage'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PublicRoute path="/signup" component={SignupPage}/>
        <PublicRoute path="/login" component={LoginPageForm}/>
        <PublicRoute path="/password-forget" component={PasswordForgetPage}/>
        <PrivateRoute path="/dashboard" component={DashboardPage}/>
        <PrivateRoute path="/expense-dashboard" component={ExpenseDashboardPage}/>
        <PrivateRoute path="/expense-create" component={AddExpensePage}/>
        <PrivateRoute path="/expense-edit/:id" component={EditExpensePage}/>
        <PrivateRoute path="/income-dashboard" component={IncomeDashboardPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter
