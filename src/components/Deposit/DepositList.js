import React from 'react'
import { connect } from 'react-redux'
import DepositListItem from './DepositListItem'

export const DepositList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Deposit</div>
      <div className="show-for-desktop">Deposit</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.deposits.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Deposits</span>
          </div>
        ) : (
          props.deposits.map((deposit) => (
            <DepositListItem key={deposit.id} {...deposit} />
          ))
        )
      }
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    deposits: state.deposits
  }
}

export default connect(mapStateToProps)(DepositList)
