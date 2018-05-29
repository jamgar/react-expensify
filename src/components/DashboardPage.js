import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <div className="content-container">
    <p>
      <Link to='/expense-dashboard' className="button">View Expenses</Link>
    </p>
    <p>
      <Link to='/income-dashboard' className="button">View Income</Link>
    </p>
  </div>
)

export default DashboardPage
