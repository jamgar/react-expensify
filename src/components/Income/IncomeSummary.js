import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const IncomeSummary = () => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          IncomeSummary
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/income-create">Add Income</Link>
        </div>
      </div>
    </div>
  )
}

export default IncomeSummary
