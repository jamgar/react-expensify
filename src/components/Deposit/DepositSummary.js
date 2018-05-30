import React from 'react'
import { Link } from 'react-router-dom'

const DepositSummary = () => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          DepositSummary
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/deposit-create">Add Deposit</Link>
        </div>
      </div>
    </div>
  )
}

export default DepositSummary
