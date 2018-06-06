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
import AddExpensePage from '../components/Expense//AddExpensePage'
import EditExpensePage from '../components/Expense//EditExpensePage'
import ExpenseDashboardPage from '../components/Expense//ExpenseDashboardPage'
// Deposit
import DepositDashboardPage from '../components/Deposit/DepositDashboardPage'
import AddDepositPage from '../components/Deposit/AddDepositPage'
import EditDepositPage from '../components/Deposit/EditDepositPage'

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

        <PrivateRoute path="/deposit-dashboard" component={DepositDashboardPage}/>
        <PrivateRoute path="/deposit-create" component={AddDepositPage}/>
        <PrivateRoute path="/deposit-edit/:id" component={EditDepositPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter
