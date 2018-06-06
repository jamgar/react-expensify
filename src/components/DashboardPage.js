import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectBalance from '../selectors/selectors-balance'

const DashboardPage = ({ currentBalance }) => {
  const formatedTotal = numeral(currentBalance / 100).format('$0,0.00')
  return (
    <div>
      <div className="page-header page-header--centered">
        <div className="content-container">
          <h1 className="page-header__title">Current Balance: <span className={currentBalance < 0 ? "negative" : ''}>{formatedTotal}</span></h1>
        </div>
      </div>
      <div className="content-container">
        <div className="cards-group">
          <div className="card">
            <div className="card__header card__header--dark">
              <h1 className="card__title">Expenses</h1>
            </div>
            <div className="card__content">
              Track your expenses. View your expenses by Date. Sort by amount or Date.
            </div>
            <div className="card__footer">
              <Link to='/expense-dashboard' className="button">View Expenses</Link>
            </div>
          </div>
          <div className="card">
            <div className="card__header card__header--dark">
              <h1 className="card__title">Deposits</h1>
            </div>
            <div className="card__content">
              Track your deposits. View your deposits by Date. Sort by amount or Date.
            </div>
            <div className="card__footer">
              <Link to='/deposit-dashboard' className="button">View Deposits</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentBalance: selectBalance(state.expenses, state.deposits)
  }
}

export default connect(mapStateToProps)(DashboardPage)
