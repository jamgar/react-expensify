import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectDeposits from '../../selectors/selectors'
import selectDepositsTotal from '../../selectors/selectors-total'

export const DepositsSummary = ({ depositsCount, depositsTotal}) => {
  const depositWord = depositsCount === 1 ? 'deposit' : 'deposits'
  const formatedTotal = numeral(depositsTotal / 100).format('0,00.00')
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{depositsCount}</span> {depositWord} totalling <span>${formatedTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/deposit-create">Add Deposit</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleDeposits = selectDeposits(state.deposits, state.filters)
  return {
    depositsCount: visibleDeposits.length,
    depositsTotal: selectDepositsTotal(visibleDeposits)
  }
}
export default connect(mapStateToProps)(DepositsSummary)
